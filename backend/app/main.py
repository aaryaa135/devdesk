from fastapi import FastAPI

app = FastAPI(title="DevDesk API")


@app.get("/")
def home():
    return {"message": "DevDesk Backend Running"}