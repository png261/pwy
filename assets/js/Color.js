import {COLOR, WALLPAPER} from "./data.js"
import API from "./Api.js"

const section = document.querySelector("section#color")
const color_input = section.querySelectorAll('input[type="color"]')
const wallpaper_btn = section.querySelector("button#color__wallpaper")

export function render(colors = COLOR) {
    Object.entries(colors).forEach(([colorName,colorValue]) => {
        const colorInput = section.querySelector(`input[name="${colorName}"]`)
        colorInput.value = colorValue
    });
}

export async function getWallpaper (){
	const colors = await API.wallpaper_get_color(WALLPAPER.current)
	await API.color_put(colors)
	render(colors)
}

export function events () {
    color_input.forEach( el => {
		el.addEventListener('input', function() {
			API.color_put({
				[this.name]:this.value
			})
		})
	});
    wallpaper_btn.addEventListener('click', getWallpaper)
}
