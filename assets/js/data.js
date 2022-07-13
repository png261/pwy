import API from './Api.js';

let PWY_API = '';
let COLOR = {};
let THEME = {};
let WALLPAPER = {};
let SYS = {};

function updateColor(data) {
    COLOR = { ...COLOR, ...data };
}

function updateWall(data) {
    WALLPAPER = { ...WALLPAPER, ...data };
}

function updateApiUrl(url) {
    PWY_API = url;
}

async function init() {
    WALLPAPER = await API.Wall.get();
    THEME = await API.Theme.get();
    COLOR = await API.Color.get();
    SYS = await API.Sys.get();
}

export {
    PWY_API,
    COLOR,
    THEME,
    WALLPAPER,
    SYS,
    updateColor,
    updateWall,
    updateApiUrl,
    init,
};
