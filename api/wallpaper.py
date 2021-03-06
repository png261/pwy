import os
import uuid
from typing import List
import pywal
from settings import WALLPAPER_DIR
from fastapi import File, UploadFile
from app import app

WALLPAPER = {'current': 'current', 'list': os.listdir(WALLPAPER_DIR)}


def update_list_wallpaper():
    WALLPAPER.update({'list': os.listdir(WALLPAPER_DIR)})


@app.get("/wallpaper/{id}/color", tags=["wallpaper"])
def get_wallpaper_colors(id):
    img = os.path.join(WALLPAPER_DIR, id)
    colors = pywal.colors.get(img)["colors"]
    return colors


@app.get("/wallpaper", tags=["wallpaper"])
def get_wallpapers():
    update_list_wallpaper()
    return WALLPAPER


@app.put("/wallpaper/{id}", tags=["wallpaper"])
def set_wallpaper(id: str):
    WALLPAPER.update({"current": id})
    return WALLPAPER


@app.post("/wallpaper", tags=["wallpaper"])
async def upload(files: List[UploadFile] = File(...)):
    imgs = []
    for file in files:
        content = await file.read()
        filename = str(uuid.uuid1().hex)
        path = os.path.join(WALLPAPER_DIR, filename)
        with open(path, 'wb') as f:
            f.write(content)
        imgs.append(filename)
    update_list_wallpaper()
    return imgs


@app.get("/wallpaper/load", tags=["wallpaper"])
def load_wallpaper():
    image = pywal.image.get(os.path.join(WALLPAPER_DIR, WALLPAPER["current"]))
    pywal.wallpaper.change(image)
    return WALLPAPER
