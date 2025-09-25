from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import models, schemas
from ..database import get_db

router = APIRouter(prefix="/users", tags=["users"])

@router.post("/", response_model=schemas.UserOut)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    significant_dates_dicts = [d.dict() for d in user.significant_dates]

    db_user = models.User(
        email=user.email,
        name=user.name,
        birth_date=user.birth_date,
        significant_dates=significant_dates_dicts,
        preferred_lotteries=user.preferred_lotteries
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user