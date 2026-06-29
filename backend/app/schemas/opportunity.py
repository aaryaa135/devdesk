from pydantic import BaseModel
from typing import Optional


class Opportunity(BaseModel):
    id: str

    company: str

    title: str

    location: Optional[str] = None

    employment_type: Optional[str] = None

    category: str

    department: Optional[str] = None

    posted_at: Optional[str] = None

    remote: bool = False

    apply_url: str

    source: str