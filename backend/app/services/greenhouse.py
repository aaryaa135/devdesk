import json
import httpx
import re
from pathlib import Path


DATA_FILE = (
    Path(__file__).parent.parent
    / "data"
    / "greenhouse_boards.json"
)


with open(DATA_FILE, "r") as file:

    GREENHOUSE_BOARDS = json.load(file)


KEYWORDS = [
    "intern",
    "internship",
    "student",
    "graduate",
    "new grad",
    "campus"
]


async def fetch_greenhouse_jobs():

    opportunities = []

    async with httpx.AsyncClient(timeout=20) as client:

        for board in GREENHOUSE_BOARDS:

            try:

                response = await client.get(
                    f"https://boards-api.greenhouse.io/v1/boards/{board}/jobs"
                )

                if response.status_code != 200:
                    continue

                jobs = response.json().get(
                    "jobs",
                    []
                )

                for job in jobs:

                    title = job.get(
                        "title",
                        ""
                    ).lower()

                    if not any(
                        re.search(
                            rf"\b{re.escape(keyword)}\b",
                            title
                        )
                        for keyword in KEYWORDS
                    ):
                        continue

                    location = job.get(
                        "location",
                        {}
                    ).get(
                        "name",
                        "Unknown"
                    )

                    opportunities.append({

                        "id": str(job["id"]),

                        "company": board.title(),

                        "title": job["title"],

                        "location": location,

                        "employment_type": None,

                        "category": "Internship",

                        "department": (
                            job["departments"][0]["name"]
                            if job.get("departments")
                            else None
                        ),

                        "posted_at": job.get(
                            "updated_at"
                        ),

                        "remote": (
                            "remote"
                            in location.lower()
                        ),

                        "apply_url": job[
                            "absolute_url"
                        ],

                        "source": "Greenhouse"

                    })

            except Exception:

                continue

    return opportunities