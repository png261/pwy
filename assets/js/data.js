import API from './Api.js'

let COLOR = {};
let THEME = {};
let WALLPAPER = {};
let SYS = {};
let BASE_URL = 'http://127.0.0.1:2601';

function updateColor(data) {
	COLOR = {...COLOR,...data}
} 

function updateWall(data) {
	WALLPAPER = {...WALLPAPER,...data}
} 

function updateBaseUrl(url) {
	BASE_URL = url
} 

async function initData (){
	WALLPAPER = await API.Wall.get()
	THEME = await API.Theme.list()
	COLOR = await API.Color.get()
	SYS = await API.Sys.get()
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
