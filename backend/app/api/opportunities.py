from fastapi import APIRouter, Query

from app.services.opportunity_service import fetch_opportunities

router = APIRouter()


@router.get("/")
async def get_opportunities(
    search: str | None = Query(default=None),
    company: str | None = Query(default=None),
    remote: bool | None = Query(default=None)
):

    jobs = await fetch_opportunities()

    if search:

        keyword = search.lower()

        jobs = [

            job

            for job in jobs

            if (
                keyword in job["title"].lower()
                or keyword in job["company"].lower()
                or keyword in job["location"].lower()
                or (
                    job["department"]
                    and keyword in job["department"].lower()
                )
            )

        ]

    if company:

        jobs = [

            job for job in jobs

            if company.lower() == job["company"].lower()

        ]

    if remote is not None:

        jobs = [

            job

            for job in jobs

            if bool(job["remote"]) == remote

        ]

    return jobs