from app.services.greenhouse import (
    fetch_greenhouse_jobs
)


async def get_all_opportunities():

    jobs = await fetch_greenhouse_jobs()

    unique = {}

    for job in jobs:

        key = (
            job["company"],
            job["title"],
            job["location"]
        )

        unique[key] = job

    jobs = list(unique.values())

    jobs.sort(

        key=lambda x: (
            x["posted_at"]
            if x["posted_at"]
            else ""
        ),

        reverse=True

    )

    return jobs