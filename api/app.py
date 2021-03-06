from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from settings import DATA_DIR

tags_metadata = [
    {
        "name": "wallpaper",
    },
    {
        "name": "theme",
    },
    {
        "name": "color",
    },
    {
        "name": "system",
    },
]

app = FastAPI(title="Pwy",
              description="Control your pywal",
              contact={
                  "name": "Phuong Nguyen",
                  "url": "https://png261.github.io",
                  "email": "nhphuong.code@gmail.com",
              },
              openapi_tags=tags_metadata,
              redoc_url=None,
              docs_url="/")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory=DATA_DIR), name="static")

from init import *
from system import *
from wallpaper import *
from theme import *
from color import *
