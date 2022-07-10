import { WALLPAPER, PWY_API, updateWall } from './data.js'
import API from './Api.js'

const section = document.querySelector('section#wallpaper')
const gallery = section.querySelector('.wallpaper__gallery')
const input_folder = section.querySelector('.wallpaper__upload input[type="file"]')

function render(imgs = WALLPAPER.list) {
    imgs.map(id => {
		const img_url = `${PWY_API}/static/wallpapers/${id}`
		gallery.innerHTML += `<div id="${id}"
								class="wallpaper__picture"
								onclick="changeWallpaper(this)"  
								style="background-image:url(${img_url})">
							</div>`
	})
}

function change(el) {
	const id = el.getAttribute('id')
	updateWall({'current': id})

	const activedEl = gallery.querySelectorAll('.wallpaper__picture.active')
    activedEl.forEach(el => el.classList.remove("active"));
    el.classList.add('active');
}
window.changeWallpaper = change

async function add() {
	const imgs = [...input_folder.files] 
	const { newUrl } = await API.Wall.upload(imgs)
	render(newUrl)
}

function events() {
	input_folder.addEventListener('change', add)
}

export default {
	render,
	events,
	add, 
	change
}
