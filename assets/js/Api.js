import { updateApiUrl, COLOR, WALLPAPER } from './data.js';
import {
    cleanUrl,
    getParam,
    isConnected,
    get,
    put,
    remove,
    upload,
} from './helper.js';

async function check() {
    const api = cleanUrl(getParam('api'));
    if (!(await isConnected(api))) return;
    updateApiUrl(api);
    return true;
}

const Color = {
    get: () => get('color'),
    load: () => get('color/load'),
    put: (colors = COLOR) => put('color', colors),
};

const Theme = {
    get: () => get('theme'),
    color: (theme, dark = true) => get(`theme/${theme}/?dark=${dark}`),
};

const Wall = {
    get: () => get('wallpaper'),
    load: () => get('wallpaper/load'),
    put: (id = WALLPAPER.current) => put(`wallpaper/${id}`),
    get_color: () => get(`wallpaper/${WALLPAPER.current}/color`),
    upload: (files) => upload('wallpaper', files),
    remove: (id) => remove(`wallpaper/${id}`),
};

const Sys = {
    get: () => get('sys'),
    reset: () => get('reset'),
};

export default {
    check,
    Color,
    Theme,
    Wall,
    Sys,
};
