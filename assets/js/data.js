let DATA={};
export const BASE_URL=""

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
	const BASE_URL = params.get("api");
	console.log(BASE_URL)
    const response = await fetch(`${BASE_URL}/all`);
	const result = await response.json()
	DATA = result
	console.log(DATA)
}

export default DATA


