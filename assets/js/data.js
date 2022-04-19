export let DATA={};
export let BASE_URL=""

export async function fetchColor() {
    const response = await fetch(`${BASE_URL}/color`);
	const result = await response.json()
	DATA.color = result.colors
}

export async function fetchTheme() {
    const response = await fetch(`${BASE_URL}/theme`);
	const result = await response.json()
	DATA.theme.list = result
}

export async function fetchWallpaper() {
    const response = await fetch(`${BASE_URL}/wallpaper`);
	const result = await response.json()
	DATA.wallpaper.list = result
}

export async function initData (){
	const params = new URLSearchParams(window.location.search);
	BASE_URL = params.get("api");

    const response = await fetch(`${BASE_URL}/all`);
	const result = await response.json()
	DATA={...result}
}


