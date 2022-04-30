import API from './Api.js'

let COLOR = {};
let THEME = {};
let WALLPAPER = {};
let SYS = {};
let BASE_URL = ' '

function clearParam(){
	const newUrl = window.location.href.split('?')[0]
	window.history.pushState({}, '', newUrl );
} 

async function apiCheck(){
	const response  = await fetch(`${BASE_URL}/sys`)
	const result = await response
	return result.ok
}

function updateColor(data) {
	COLOR = {...COLOR,...data}
} 

function updateWall(data) {
	WALLPAPER = {...WALLPAPER,...data}
} 

async function handleApi(){
	const params = new URLSearchParams(window.location.search);
	BASE_URL = params.get('api') || localStorage.getItem('BASE_URL', BASE_URL);
	clearParam()
	const isApiValid =  await apiCheck() 
	if(!isApiValid) return false 
	localStorage.setItem('BASE_URL',BASE_URL);
	return true
}

async function initData (){
	const hasData = await handleApi()
	if(!hasData) return false

	WALLPAPER = await API.wallpaper_get()
	THEME = await API.themes_get()
	SYS = await API.system_get()
	COLOR = await API.color_get()
	return true
}

export {
	BASE_URL,

	COLOR,
	THEME,
	WALLPAPER,
	SYS,

	updateColor,
	updateWall,
	initData
}
