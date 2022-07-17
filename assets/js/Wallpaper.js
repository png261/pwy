import API, { BASE_URL } from './api.js'
import { $, $$ } from './helper.js'
import { WALLPAPER } from './data.js'

const $gallery = $('.wallpaper__gallery')
const $input = $('.wallpaper__upload input[type="file"]')

function activeWall(id = WALLPAPER.getCurrent()) {
    $$('.wallpaper__img.active').forEach((el) =>
        el.classList.remove('active')
    )

    const activeEl = $(`.wallpaper__img[id='${id}']`)
    activeEl && activeEl.classList.add('active')
}

function render(imgs = WALLPAPER.get()) {
    function html(id) {
        const img_url = `${BASE_URL}/static/wallpapers/${id}`
        return `<div id="${id}"
                    class="wallpaper__img"
                    onclick="changeWallpaper(this.id)"  
                    style="background-image:url(${img_url})">
                </div>`
    }

    imgs.map((id) => ($gallery.innerHTML += html(id)))
    activeWall()
}

function change(id) {
    WALLPAPER.setCurrent(id)
    activeWall()
}
window.changeWallpaper = change

function events() {
    async function add() {
        render(await API.Wall.upload([...$input.files]))
    }
    $input.addEventListener('change', add)
}

function updateCssVar(id = WALLPAPER.getCurrent()) {
    document.documentElement.style.setProperty(
        '--background-image',
        `url(${BASE_URL}/static/wallpapers/${id})`
    )
}

export default {
    render,
    events,
    change,
    updateCssVar,
}
