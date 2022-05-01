import API from './Api.js'

let COLOR = {};
let THEME = {};
let WALLPAPER = {};
let SYS = {};
let BASE_URL = 'http://localhost:8080';

function updateColor(data) {
	COLOR = {...COLOR,...data}
} 

function updateWall(data) {
	WALLPAPER = {...WALLPAPER,...data}
} 

function updateBaseUrl(url) {
	BASE_URL = BASE_URL
} 

async function initData (){
	WALLPAPER = await API.Wall.get()
	THEME = await API.Theme.list()
	SYS = await API.Sys.get()
	COLOR = await API.Color.get()
}

export {
	BASE_URL,

	COLOR,
	THEME,
	WALLPAPER,
	SYS,

	updateColor,
	updateWall,
	updateBaseUrl,

	initData,
}
