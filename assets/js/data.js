export let COLOR={};
export let THEME={};
export let WALLPAPER={};
export let OPTIONS={
	theme_dark:true
};
export let BASE_URL=""

export async function loadColor() {
    const response = await fetch(`${BASE_URL}/color`);
	const result = await response.json()
	COLOR = result
}

export async function loadTheme() {
    const response = await fetch(`${BASE_URL}/theme`);
	const result = await response.json()
	THEME = result
}

export async function loadWall() {
    const response = await fetch(`${BASE_URL}/wallpaper`);
	const result = await response.json()
	WALLPAPER = result
}

export async function initData (){
	const params = new URLSearchParams(window.location.search);
	BASE_URL = params.get("api");

	await loadColor()
	await loadTheme()
	await loadWall()
}


