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
                "private": repo["private"],
                "description": repo["description"],
                "html_url": repo["html_url"],
                "updated_at": repo["updated_at"]
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

    total_stars = 0
    total_forks = 0

    languages = {}

    for repo in repos:

        if repo["private"]:
            private_repositories += 1
        else:
            public_repositories += 1

        total_stars += repo["stargazers_count"]
        total_forks += repo["forks_count"]

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
        "top_language": top_language,
        "total_stars": total_stars,
        "total_forks": total_forks
    }

@router.get("/languages")
async def get_language_breakdown(
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

    languages = {}

    for repo in repos:

        language = repo["language"]

        if language:

            if language in languages:
                languages[language] += 1
            else:
                languages[language] = 1

    return languages

@router.get("/profile")
async def get_profile(
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
            "https://api.github.com/user",
            headers=headers
        )

    github_user = response.json()

    return {
        "name": github_user.get("name"),
        "github_username": github_user.get("login"),
        "bio": github_user.get("bio"),
        "followers": github_user.get("followers"),
        "following": github_user.get("following"),
        "public_repos": github_user.get("public_repos"),
        "avatar_url": github_user.get("avatar_url")
    }

@router.get("/dashboard")
async def get_dashboard(
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

        profile_response = await client.get(
            "https://api.github.com/user",
            headers=headers
        )

        repos_response = await client.get(
            "https://api.github.com/user/repos?per_page=100",
            headers=headers
        )

    github_user = profile_response.json()
    repos = repos_response.json()

    languages = {}

    total_stars = 0
    total_forks = 0

    public_repositories = 0
    private_repositories = 0

    for repo in repos:

        total_stars += repo["stargazers_count"]
        total_forks += repo["forks_count"]

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

    return {
        "profile": {
            "name": github_user.get("name"),
            "username": github_user.get("login"),
            "followers": github_user.get("followers"),
            "following": github_user.get("following"),
            "avatar_url": github_user.get("avatar_url")
        },
        "stats": {
            "total_repositories": len(repos),
            "top_language": max(
                languages,
                key=languages.get
            ) if languages else None,
            "total_stars": total_stars,
            "total_forks": total_forks,
            "public_repositories": public_repositories,
            "private_repositories": private_repositories
        },
        "languages": languages
    }

@router.get("/activity")
async def get_recent_activity(
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

        profile_response = await client.get(
            "https://api.github.com/user",
            headers=headers
        )

    github_user = profile_response.json()

    username = github_user["login"]

    async with httpx.AsyncClient() as client:

        events_response = await client.get(
            f"https://api.github.com/users/{username}/events",
            headers=headers
        )

    events = events_response.json()

    clean_events = []

    for event in events[:15]:

        clean_events.append(
            {
                "type": event.get("type"),
                "repo": event.get("repo", {}).get("name"),
                "created_at": event.get("created_at")
            }
        )

    return clean_events