import {WALLPAPER, BASE_URL} from "./data.js"

const container = document.querySelector("section#wallpaper")
const gallery = container.querySelector(".wallpaper__gallery")
const input_folder = container.querySelector('.wallpaper__upload input[type="file"]')

export async function change(el, id) {
    gallery.querySelectorAll(".wallpaper__picture.active").forEach(pic => { pic.classList.remove("active") });

    await fetch(`${BASE_URL}/wallpaper/${id}`, { method : 'PUT' });
	WALLPAPER.current = id

    el.classList.add("active");
}
window.changeWallpaper = change

export async function upload([...imgs]) {
	const formData = new FormData();
	imgs.map(img => formData.append("images", img))

	const respone = await fetch(`${BASE_URL}/wallpaper`, {
        method : 'POST',
        body : formData 
    });
	const {success, newUrl} = await respone.json()

	if(success){
		gallery.innerHTML += newUrl.reduce((html, url) => html += `<div onclick="changeWallpaper(this,'${url}')" class="wallpaper__picture" style="background-image:url(${BASE_URL}/static/wallpapers/${url})"> </div>`, "")
	}
}

export async function events() {
	input_folder.addEventListener("change",function (){
		upload(this.files)
	})
}

export async function render() {
    gallery.innerHTML = WALLPAPER.list.reduce((html, url) => html += `<div onclick="changeWallpaper(this,'${url}')" class="wallpaper__picture" style="background-image:url(${BASE_URL}/static/wallpapers/${url})"> </div>`, "")
}
