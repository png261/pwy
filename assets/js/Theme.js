import {THEME} from "./data.js"
import * as Color from "./Color.js"
import API from "./Api.js"

const section = document.querySelector("section#theme")
const select = section.querySelector('.theme__select select[name="theme_name"]')
const options = section.querySelectorAll('.theme__option input[name="dark"]')

async function change(theme){
	const colors = await API.theme_put(theme)
	API.color_put(colors) 
	await Color.render(colors)
}

async function loadOption(){
	const dark = THEME.isDark ? "dark" : "light"
	select.innerHTML = THEME[dark].reduce((html,theme) => html +=`<option>${theme}</option>`,"") 
}

export async function render(){
	options.checked = THEME.isDark
	loadOption()
}

export async function events(){
	select.addEventListener("change", async function() {
		change(this.value)
	}) 

    options.forEach(option => {
		option.addEventListener("change",function (){
			THEME.isDark = this.checked
			render()
		})
	});
}
