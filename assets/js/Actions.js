import API from './Api.js';
import Color from './Color.js';
import Wallpaper from './Wallpaper.js';

const section = document.querySelector('section#action');
const reset_btn = section.querySelector('button#reset');
const change_btn = section.querySelector('button#change');

function events() {
    reset_btn.addEventListener('click', async () => {
        await API.Sys.reset();
        await API.Color.load();
        await API.Wall.load();

        const colors = await API.Color.get();
        Color.render(colors);
        Color.updateCssVar()

        Wallpaper.updateCssVar()
    });

    change_btn.addEventListener('click', async () => {
        await API.Wall.put();
        await API.Wall.load();

        await API.Color.put();
        await API.Color.load();

        Color.updateCssVar()
        Wallpaper.updateCssVar()
    });
}

export default {
    events,
};
