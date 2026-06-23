from fastapi import FastAPI

from starlette.middleware.sessions import SessionMiddleware

from app.api.auth import router as auth_router

app = FastAPI(title="DevDesk API")

app.add_middleware(
    SessionMiddleware,
    secret_key="devdesk_session_secret"
)

app.include_router(
    auth_router,
    prefix="/auth",
    tags=["Auth"]
)

@app.get("/")
def home():
    return {
        "message": "DevDesk Backend Running"
    }