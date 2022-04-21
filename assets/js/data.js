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

export async function initData (){
	const params = new URLSearchParams(window.location.search);
	BASE_URL = params.get("api") || localStorage.getItem("BASE_URL",BASE_URL);
	console.log(BASE_URL)
	localStorage.setItem("BASE_URL",BASE_URL);
	window.history.replaceState({}, document.title, "/pwy");

	await loadSys()
	await loadColor()
	await loadTheme()
	await loadWall()
}


