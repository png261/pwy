import { COLOR, WALLPAPER, updateColor } from './data.js';
import API from './Api.js';
import { $, $$ } from './helper.js';

const inputs = $$('.color__input');
const wallpaper_btn = $('#color__wallpaper');

async function getWallpaper() {
    updateColor(await API.Wall.get_color(WALLPAPER.current));
    render();
}

const onChange = () => updateColor({ [this.name]: this.value });

function updateCssVar(colors = COLOR) {
    Object.entries(colors).forEach(([name, value]) => {
        document.documentElement.style.setProperty(`--${name}`, value);
    });
}

function render(colors = COLOR) {
    inputs.forEach((input) => (input.value = colors[input.name]));
}

function events() {
    inputs.forEach((input) => input.addEventListener('input', onChange));
    wallpaper_btn.addEventListener('click', getWallpaper);
}

export default {
    render,
    events,
    getWallpaper,
    updateCssVar,
};
