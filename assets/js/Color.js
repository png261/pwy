import { COLOR, WALLPAPER, updateColor } from './data.js'
import API from './Api.js'

const section = document.querySelector('section#color')
const color_inputs = section.querySelectorAll('input[type="color"]')
const wallpaper_btn = section.querySelector('button#color__wallpaper')

function render(colors = COLOR) {
    color_inputs.forEach( input => input.value = colors[input.name])
}

async function getWallpaper (){
	const colors = await API.Wall.get_color(WALLPAPER.current)
	updateColor(colors)
	render(colors)
}

function events () {
    color_inputs.forEach( input => input.addEventListener('input', function() {
		updateColor({[this.name]:this.value})
	}));

    wallpaper_btn.addEventListener('click', getWallpaper)
}

export default {
	render,
	events,
	getWallpaper,
} 
