from sqlalchemy import Column, Integer, String, Date, Boolean, JSON, DateTime, Float
from sqlalchemy.sql import func
from .database import Base
from datetime import datetime

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    name = Column(String, nullable=True)
    birth_date = Column(Date, nullable=True)
    significant_dates = Column(JSON, default=list)
    preferred_lotteries = Column(JSON, default=["euromillions"])
    monthly_spending_limit = Column(Integer, default=100)
    notify_at_80_percent = Column(Boolean, default=True)
    remind_breaks = Column(Boolean, default=True)
    zen_mode_until = Column(DateTime(timezone=True), nullable=True)
    last_self_test = Column(Date, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())