export let COLOR={};
export let THEME={};
export let WALLPAPER={};
export let SYS={};
export let OPTIONS={
	theme_dark:true
};
export let BASE_URL=""

export async function loadSys() {
    const response = await fetch(`${BASE_URL}/sys`);
	SYS = await response.json()
}

export async function loadColor() {
    const response = await fetch(`${BASE_URL}/color`);
	COLOR = await response.json()
}

export async function loadTheme() {
    const response = await fetch(`${BASE_URL}/theme`);
	THEME = await response.json()
}

export async function loadWall() {
    const response = await fetch(`${BASE_URL}/wallpaper`);
	WALLPAPER = await response.json()
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
