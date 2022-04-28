import { WALLPAPER, BASE_URL } from './data.js'
import API from './Api.js'

const section = document.querySelector('section#wallpaper')
const gallery = section.querySelector('.wallpaper__gallery')
const input_folder = section.querySelector('.wallpaper__upload input[type="file"]')
export async function render(imgs = WALLPAPER.list) {
    imgs.map((id) => gallery.innerHTML += `<div onclick="changeWallpaper(this)" id="${id}" class="wallpaper__picture" style="background-image:url(${BASE_URL}/static/wallpapers/${id})"></div>`)
}

export async function change(el) {
	const id = el.getAttribute('id')
	WALLPAPER.current = id
	await API.wallpaper_put(id)

    gallery.querySelectorAll('.wallpaper__picture.active').forEach(pic => pic.classList.remove("active"));
    el.classList.add('active');
}
window.changeWallpaper = change

export async function add() {
	const imgs = [...input_folder.files] 
	const { newUrl } = await API.wallpaper_upload(imgs)
	render(newUrl)
}

export async function events() {
	input_folder.addEventListener('change',add)
}

