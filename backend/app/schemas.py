from pydantic import BaseModel
from datetime import date
from typing import List, Optional

class SignificantDate(BaseModel):
    label: str
    date: date

class UserBase(BaseModel):
    email: str
    name: Optional[str] = None

class UserCreate(UserBase):
    birth_date: Optional[date] = None
    significant_dates: List[SignificantDate] = []
    preferred_lotteries: List[str] = ["euromillions"]

class UserOut(UserBase):
    id: int
    birth_date: Optional[date]
    significant_dates: List[SignificantDate]
    preferred_lotteries: List[str]
    monthly_spending_limit: int
    notify_at_80_percent: bool
    remind_breaks: bool
    created_at: datetime

    class Config:
        from_attributes = True