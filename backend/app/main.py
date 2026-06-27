from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware

from app.api.github import router as github_router
from app.api.auth import router as auth_router

app = FastAPI(title="DevDesk API")

app.add_middleware(
    SessionMiddleware,
    secret_key="devdesk_session_secret"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[""https://devdesk-coral.vercel.app""],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    auth_router,
    prefix="/auth",
    tags=["Auth"]
)

app.include_router(
    github_router,
    prefix="/github",
    tags=["GitHub"]
)

@app.get("/")
def home():
    return {
        "message": "DevDesk Backend Running"
    }