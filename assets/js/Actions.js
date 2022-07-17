import API from './api.js'
import { $ } from './helper.js'
import Color from './Color.js'
import Wallpaper from './Wallpaper.js'

const $reset = $('.action__reset')
const $change = $('.action__change')

async function reset() {
    await API.Sys.reset()
    await API.Color.load()
    await API.Wall.load()
    Wallpaper.change('current')
    Color.render(await API.Color.get())
    Color.updateCssVar()
    Wallpaper.updateCssVar()
}

async function change() {
    await API.Wall.put()
    await API.Color.put()
    await API.Wall.load()
    await API.Color.load()
    Color.updateCssVar()
    Wallpaper.updateCssVar()
}

function events() {
    $reset.addEventListener('click', reset)
    $change.addEventListener('click', change)
}

export default {
    events,
}
