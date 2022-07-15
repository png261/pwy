import API from './Api.js';
import Color from './Color.js';
import Wallpaper from './Wallpaper.js';
import { $ } from './helper.js';

const reset_btn = $('.action__reset');
const change_btn = $('.action__change');

async function reset(){
        await API.Sys.reset();
        await API.Color.load();
        await API.Wall.load();
        Wallpaper.change("current")
        Color.render(await API.Color.get());
        Color.updateCssVar()
        Wallpaper.updateCssVar()
}

async function change(){
        await API.Wall.put();
        await API.Color.put();
        await API.Wall.load();
        await API.Color.load();
        Color.updateCssVar()
        Wallpaper.updateCssVar()
}

function events() {
    reset_btn.addEventListener('click', reset)
    change_btn.addEventListener('click', change)
}

export default {
    events,
};
