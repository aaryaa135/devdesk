from fastapi import APIRouter, Request
from authlib.integrations.starlette_client import OAuth
from starlette.responses import RedirectResponse
from dotenv import load_dotenv
import os

load_dotenv()

router = APIRouter()

oauth = OAuth()

oauth.register(
    name="github",
    client_id=os.getenv("GITHUB_CLIENT_ID"),
    client_secret=os.getenv("GITHUB_CLIENT_SECRET"),
    access_token_url="https://github.com/login/oauth/access_token",
    authorize_url="https://github.com/login/oauth/authorize",
    api_base_url="https://api.github.com/",
    client_kwargs={"scope": "user:email"},
)

@router.get("/github/login")
async def login(request: Request):

    redirect_uri = "http://localhost:8000/auth/github/callback"

    return await oauth.github.authorize_redirect(
        request,
        redirect_uri
    )
@router.get("/github/callback", name="callback")
async def callback(request: Request):

    token = await oauth.github.authorize_access_token(
        request
    )

    response = await oauth.github.get(
        "user",
        token=token
    )

    user = response.json()

    return {
        "github_id": user["id"],
        "username": user["login"],
        "name": user.get("name"),
    }