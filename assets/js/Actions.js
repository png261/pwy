import { SYS, WALLPAPER, COLOR } from './data.js'
import { $ } from './helper.js'
import Color from './Color.js'
import Wallpaper from './Wallpaper.js'

const $reset = $('.action__reset')
const $change = $('.action__change')

async function reset() {
    await SYS.reset()

    await WALLPAPER.load()
    await COLOR.load()

    Color.updateCssVar()
    Wallpaper.updateCssVar()

    Wallpaper.active()
    Color.render()
}

async function change() {
    await WALLPAPER.update()
    await COLOR.update()

    await WALLPAPER.load()
    await COLOR.load()

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
