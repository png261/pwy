import {WALLPAPER, BASE_URL} from "./data.js"
import API from "./Api.js"

const section = document.querySelector("section#wallpaper")
const gallery = section.querySelector(".wallpaper__gallery")
const input_folder = section.querySelector('.wallpaper__upload input[type="file"]')

export async function change(el, id) {
    gallery.querySelectorAll(".wallpaper__picture.active").forEach(pic => { pic.classList.remove("active") });
	WALLPAPER.current = id
    el.classList.add("active");
	await API.wallpaper_put(id)
}
window.changeWallpaper = change

export async function add([...imgs]) {
	const { newUrl } = await API.wallpaper_upload(imgs)
	gallery.innerHTML += newUrl.reduce((html, url) => html += `<div onclick="changeWallpaper(this,'${url}')" class="wallpaper__picture" style="background-image:url(${BASE_URL}/static/wallpapers/${url})"> </div>`, "")
}

export async function events() {
	input_folder.addEventListener("change",function (){
		add(this.files)
	})
}

export async function render() {
    gallery.innerHTML = WALLPAPER.list.reduce((html, url) => html += `<div onclick="changeWallpaper(this,'${url}')" class="wallpaper__picture" style="background-image:url(${BASE_URL}/static/wallpapers/${url})"> </div>`, "")
}
