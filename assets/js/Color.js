import { COLOR, WALLPAPER, updateColor } from './data.js'
import API from './Api.js'

const section = document.querySelector('section#color')
const color_input = section.querySelectorAll('input[type="color"]')
const wallpaper_btn = section.querySelector('#color__wallpaper')

function render(colors = COLOR) {
    color_input.forEach( el => el.value = colors[el.name])
}

async function getWallpaper (){
	const colors = await API.wallpaper_get_color(WALLPAPER.current)
	updateColor(colors)
	render(colors)
}

function events () {
    color_input.forEach( el => el.addEventListener('input', function() {
		updateColor({[this.name]:this.value})
	}));
    wallpaper_btn.addEventListener('click', getWallpaper)
}

export default {
	render,
	events,
	getWallpaper,
} 
