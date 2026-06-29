import httpx
import re

LEVER_COMPANIES = [
    "netlify",
    "canonical",
    "sourcegraph",
    "postman",
    "mongodb"
]


async def fetch_lever_jobs():

    opportunities = []

    keywords = [
        "intern",
        "internship",
        "student",
        "graduate",
        "new grad",
        "campus"
    ]

    async with httpx.AsyncClient(timeout=20) as client:

        for company in LEVER_COMPANIES:

            try:

                response = await client.get(
                    f"https://api.lever.co/v0/postings/{company}?mode=json"
                )

                if response.status_code != 200:
                    continue

                jobs = response.json()

                for job in jobs:

                    title = job.get("text", "").lower()

                    if any(
                        re.search(rf"\b{re.escape(keyword)}\b", title)
                        for keyword in keywords
                    ):

                        opportunities.append({

                            "id": str(job["id"]),

                            "company": company.title(),

                            "title": job["text"],

                            "location": job.get(
                                "categories",
                                {}
                            ).get(
                                "location",
                                "Unknown"
                            ),

                            "employment_type": job.get(
                                "categories",
                                {}
                            ).get(
                                "commitment"
                            ),

                            "category": "Internship",

                            "apply_url": job["hostedUrl"],

                            "source": "Lever"

                        })

            except Exception:
                continue

    return opportunities