import { WALLPAPER, PWY_API, updateWall } from './data.js';
import API from './Api.js';
import { $, $$ } from './helper.js';

const gallery = $('.wallpaper__gallery');
const input = $('.wallpaper__upload input[type="file"]');

function activeWall(id = WALLPAPER.current) {
    const walls = $$('.wallpaper__picture.active');
    walls.forEach((el) => el.classList.remove('active'));

    const activeEl = $(`.wallpaper__picture[id='${id}']`);
    activeEl && activeEl.classList.add('active');
}

function pictureHTML(id) {
    const img_url = `${PWY_API}/static/wallpapers/${id}`;
    return `<div id="${id}"
                class="wallpaper__picture"
                onclick="changeWallpaper(this.id)"  
                style="background-image:url(${img_url})">
            </div>`;
}

function render(imgs = WALLPAPER.list) {
    imgs.map((id) => (gallery.innerHTML += pictureHTML(id)));
    activeWall();
}

function change(id) {
    updateWall({ current: id });
    activeWall();
}
window.changeWallpaper = change;

async function add() {
    const { newUrl } = await API.Wall.upload([...input.files]);
    render(newUrl);
}

function events() {
    input.addEventListener('change', add);
}

function updateCssVar(id = WALLPAPER.current) {
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
    updateCssVar,
};
