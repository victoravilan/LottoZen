from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import auth, users, generator, lottery, responsible, dashboard, analysis

app = FastAPI(title="LottoZen API", version="1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(users.router)
app.include_router(generator.router)
app.include_router(lottery.router)
app.include_router(responsible.router)
app.include_router(dashboard.router)
app.include_router(analysis.router)

@app.get("/")
def read_root():
    return {"message": "Bienvenido a LottoZen API - Juega con conciencia."}