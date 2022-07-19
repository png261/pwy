import API from './api.js'
import { $, $$ } from './helper.js'
import { COLOR} from './data.js'

const $inputs = $$('.color__input')
const $getWallpaper = $('#color__wallpaper')

async function getWallpaper() {
    COLOR.set(await API.Wall.get_color())
    render()
}

function updateCssVar(colors = COLOR.get()) {
    Object.entries(colors).forEach(([name, value]) => {
        document.documentElement.style.setProperty(`--${name}`, value)
    })
}

function render(colors = COLOR.get()) {
    $inputs.forEach((input) => (input.value = colors[input.name]))
}

function events() {
    function onChange() {
        COLOR.put(this)
    }
    $inputs.forEach((input) => input.addEventListener('input', onChange))
    $getWallpaper.addEventListener('click', getWallpaper)
}

export default {
    render,
    events,
    getWallpaper,
    updateCssVar,
}
