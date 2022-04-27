import {BASE_URL, COLOR, THEME, WALLPAPER} from "./data.js"
// COLOR
async function color_get(){
    const response = await fetch(`${BASE_URL}/color`)
	return await response.json()
}

async function color_put(colors = COLOR){
    const response = await fetch(`${BASE_URL}/color`, {
        method : 'PUT',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(colors)
    });
	return await response.json()
}

// THEME
async function theme_get(){
    const response = await fetch(`${BASE_URL}/theme`);
	return await response.json()
}

async function theme_put(theme, dark = true){
    const response = await fetch(`${BASE_URL}/theme`, {
        method : 'PUT',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({ theme, dark })
    });
	return await response.json()
}

// WALLPAPER
async function wallpaper_get(){
    const response = await fetch(`${BASE_URL}/wallpaper`);
	return await response.json()
}

async function wallpaper_put(id){
    const response = await fetch(`${BASE_URL}/wallpaper/${id}`, {
        method : 'PUT',
    });
	return await response.json()
}

async function wallpaper_get_color(){
    const response = await fetch(`${BASE_URL}/wallpaper/${WALLPAPER.current}/color`)
	return await response.json()
}

async function wallpaper_upload(files){
	let data = new FormData()
	files.map(file => data.append("files", file))

	const response = await fetch(`${BASE_URL}/wallpaper`, {
        method : 'POST',
        body : data
    });
	return await response.json()
}

async function wallpaper_delete(id){
	const response = await fetch(`${BASE_URL}/wallpaper/${id}`, {
        method : 'DELETE',
        body : data
    });
	return await response.json()
}

// SYSTEM INFO
async function system_get(){
	const response = await fetch(`${BASE_URL}/sys`)
	return await response.json()
}

export default {
	color_get,
	color_put,
	theme_get,
	theme_put,
	wallpaper_get,
	wallpaper_put,
	wallpaper_get_color,
	wallpaper_upload,
	wallpaper_delete,
	system_get
}
