import API from "./Api.js"

export let COLOR={};
export let THEME={};
export let WALLPAPER={};
export let SYS={};
export let BASE_URL=""

export async function loadSys() {
	SYS = await API.system_get()
}

export async function loadColor() {
	COLOR = await API.color_get()
}

export async function loadTheme() {
	THEME = await API.theme_get()
}

export async function loadWall() {
	WALLPAPER = await API.wallpaper_get()
}

export function clearParam(){
	const newUrl = window.location.href.split("?")[0]
	window.history.pushState({}, "", newUrl );
} 

async function apiCheck(){
	const response  = await fetch(`${BASE_URL}/sys`)
	const result = await response
	return result.ok
}

async function handleApi(){
	const params = new URLSearchParams(window.location.search);
	BASE_URL = params.get("api") || localStorage.getItem("BASE_URL", BASE_URL);
	clearParam()
	const isApiValid =  await apiCheck() 
	if(! isApiValid) return false 
	localStorage.setItem("BASE_URL",BASE_URL);
	return true
}

export async function initData (){
	const hasData = await handleApi()
	if(!hasData) return false

	await loadSys()
	await loadColor()
	await loadTheme()
	await loadWall()

	return true
}
