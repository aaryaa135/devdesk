from fastapi import APIRouter, Request, Depends
from sqlalchemy.orm import Session
from authlib.integrations.starlette_client import OAuth
from dotenv import load_dotenv
from app.core.security import create_access_token
from app.core.dependencies import get_current_user
from fastapi.responses import JSONResponse

from app.db.database import get_db
from app.models.user import User

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
async def callback(
    request: Request,
    db: Session = Depends(get_db)
):

    token = await oauth.github.authorize_access_token(
        request
    )

    response = await oauth.github.get(
        "user",
        token=token
    )

    github_user = response.json()

    existing_user = db.query(User).filter(
        User.github_id == str(github_user["id"])
    ).first()

    if not existing_user:

        existing_user = User(
            github_id=str(github_user["id"]),
            github_username=github_user["login"],
            email=github_user.get("email"),
            avatar_url=github_user.get("avatar_url")
        )

        db.add(existing_user)
        db.commit()
        db.refresh(existing_user)

    access_token = create_access_token(
    {
        "user_id": existing_user.id,
        "github_username": existing_user.github_username
    }
)

    return JSONResponse(
    content={
        "message": "Login successful",
        "access_token": access_token,
        "token_type": "bearer",
        "user_id": existing_user.id,
        "github_username": existing_user.github_username
    }
)

@router.get("/me")
async def get_me(
    current_user=Depends(get_current_user)
):

    return current_user