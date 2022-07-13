import { WALLPAPER, PWY_API, updateWall } from './data.js';
import API from './Api.js';

const section = document.querySelector('section#wallpaper');
const gallery = section.querySelector('.wallpaper__gallery');
const input_folder = section.querySelector(
    '.wallpaper__upload input[type="file"]'
);

function activeWall(id = WALLPAPER.current ){
    const walls = gallery.querySelectorAll('.wallpaper__picture.active');
    walls.forEach((el) => el.classList.remove('active'));

    const activeEl = gallery.querySelector(`.wallpaper__picture[id='${id}']`)
    if(!activeEl) return 
    activeEl.classList.add('active');
}


function render(imgs = WALLPAPER.list) {
    imgs.map((id) => {
        const img_url = `${PWY_API}/static/wallpapers/${id}`;
        gallery.innerHTML += `<div id="${id}"
								class="wallpaper__picture"
								onclick="changeWallpaper(this.id)"  
								style="background-image:url(${img_url})">
							</div>`;
    });
    activeWall()
}

function change(id) {
    updateWall({ current: id });
    activeWall()
}
window.changeWallpaper = change;

async function add() {
    const imgs = [...input_folder.files];
    const { newUrl } = await API.Wall.upload(imgs);
    render(newUrl);
}

function events() {
    input_folder.addEventListener('change', add);
}

function updateCssVar(id = WALLPAPER.current){
    document.documentElement.style.setProperty(
        '--background-image',
        `url(${PWY_API}/static/wallpapers/${id})`
    );
}


export default {
    render,
    events,
    add,
    change,
    updateCssVar
};
