import {COLOR,WALLPAPER,loadColor, BASE_URL,updateColor} from "./data.js"

const container = document.querySelector("section#color")
const color_input = container.querySelectorAll('input[type="color"]')
const reset_btn = document.querySelector("button#reset")
const wallpaper_btn = document.querySelector("button#color__wallpaper")

export async function update () {
    await fetch(`${BASE_URL}/color`, {
        method : 'PUT',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(COLOR)
    });
}

export async function render () {
    Object.entries(COLOR).forEach(([colorName,colorValue]) => {
        const colorInput = container.querySelector(`input[name="${colorName}"]`)
        colorInput.value = colorValue
    });
}

async function reset() {
	await fetch("reset")
	await loadColor()
    render()
}

export async function getWallpaper (){
    const respone = await fetch(`${BASE_URL}/wallpaper/${WALLPAPER.current}/color`)
	const colors = await respone.json()
	updateColor(colors)
	render()
}

export function events () {
    color_input.forEach( inputEl => {
		inputEl.addEventListener('input', function() {
			COLOR[this.name] = this.value
			update()
		})
	});
    reset_btn.addEventListener('click', reset)
    wallpaper_btn.addEventListener('click', getWallpaper)
}
