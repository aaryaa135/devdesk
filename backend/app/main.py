from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware

from app.api.auth import router as auth_router
from app.api.github import router as github_router
from app.api.opportunities import router as opportunities_router

app = FastAPI(
    title="DevDesk API",
    version="2.0.0"
)

# Session Middleware
app.add_middleware(
    SessionMiddleware,
    secret_key="devdesk_session_secret"
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://devdesk-coral.vercel.app",
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root Endpoint
@app.get("/")
def home():
    return {
        "message": "DevDesk Backend Running 🚀"
    }

# Health Check
@app.get("/health")
def health():
    return {
        "status": "ok"
    }

# Routers
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

app.include_router(
    opportunities_router,
    prefix="/opportunities",
    tags=["Opportunities"]
)