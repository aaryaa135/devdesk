from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.user import User

import httpx

router = APIRouter()


@router.get("/repos")
async def get_repositories(
    user_id: int,
    db: Session = Depends(get_db)
):

    user = db.query(User).filter(
        User.id == user_id
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    headers = {
        "Authorization": f"Bearer {user.github_access_token}"
    }

    async with httpx.AsyncClient() as client:

        response = await client.get(
            "https://api.github.com/user/repos?per_page=100",
            headers=headers
        )

    repos = response.json()

    clean_repos = []

    for repo in repos:

        clean_repos.append(
            {
                "name": repo["name"],
                "language": repo["language"],
                "stars": repo["stargazers_count"],
                "forks": repo["forks_count"],
                "private": repo["private"]
            }
        )

    return clean_repos


@router.get("/stats")
async def get_github_stats(
    user_id: int,
    db: Session = Depends(get_db)
):

    user = db.query(User).filter(
        User.id == user_id
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    headers = {
        "Authorization": f"Bearer {user.github_access_token}"
    }

    async with httpx.AsyncClient() as client:

        response = await client.get(
            "https://api.github.com/user/repos?per_page=100",
            headers=headers
        )

    repos = response.json()

    total_repositories = len(repos)

    public_repositories = 0
    private_repositories = 0

    languages = {}

    for repo in repos:

        if repo["private"]:
            private_repositories += 1
        else:
            public_repositories += 1

        language = repo["language"]

        if language:

            if language in languages:
                languages[language] += 1
            else:
                languages[language] = 1

    top_language = None

    if languages:
        top_language = max(
            languages,
            key=languages.get
        )

    return {
        "total_repositories": total_repositories,
        "public_repositories": public_repositories,
        "private_repositories": private_repositories,
        "top_language": top_language
    }