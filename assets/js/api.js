import { COLOR, WALLPAPER, THEME } from './data.js'
import { cleanUrl, getParam, isConnected } from './helper.js'

let BASE_URL = ''

async function init() {
    BASE_URL = cleanUrl(getParam('api'))
    if (!(await isConnected(BASE_URL))) return false
    return true
}

async function get(url) {
    return await fetch(`${BASE_URL}/${url}`).then((response) => response.json())
}

async function put(url, data = {}) {
    return await fetch(`${BASE_URL}/${url}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    }).then((response) => response.json())
}

async function upload(url, files) {
    let data = new FormData()
    files.map((file) => data.append('files', file))

    return await fetch(`${BASE_URL}/${url}`, {
        method: 'POST',
        body: data,
    }).then((response) => response.json())
}

const Color = {
    get: () => get('color'),
    load: () => get('color/load'),
    put: (colors = COLOR.get()) => put('color', colors),
}

const Theme = {
    get: () => get('theme'),
    color: (theme, dark = THEME.isDark) =>
        get(`theme/${dark ? 'dark' : 'light'}/${theme}`),
}

const Wall = {
    get: () => get('wallpaper'),
    load: () => get('wallpaper/load'),
    put: (id = WALLPAPER.current) => put(`wallpaper/${id}`),
    get_color: () => get(`wallpaper/${WALLPAPER.current}/color`),
    upload: (files) => upload('wallpaper', files),
}

const Sys = {
    get: () => get('sys'),
    reset: () => get('reset'),
}

export { BASE_URL }

export default {
    init,
    Color,
    Theme,
    Wall,
    Sys,
}
