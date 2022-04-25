import {WALLPAPER, BASE_URL} from "./data.js"

const container = document.querySelector("section#wallpaper")
const gallery = container.querySelector(".wallpaper__gallery")
const input_folder = container.querySelector('.wallpaper__upload input[type="file"]')

export async function change(el, id) {
    gallery.querySelectorAll(".wallpaper__picture.active").forEach(pic => { pic.classList.remove("active") });
	WALLPAPER.current = id
    el.classList.add("active");
}
window.changeWallpaper = change

async function upload(files){
	let data = new FormData()
	files.map(file => data.append("files", file))

	const respone = await fetch(`${BASE_URL}/wallpaper`, {
        method : 'POST',
        body : data
    });
	return await respone.json()
}

export async function add([...imgs]) {
	const {newUrl} = await upload(imgs)
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
