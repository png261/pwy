import {THEME, OPTIONS, loadColor, BASE_URL, updateColor} from "./data.js"
import * as Color from "./Color.js"

const section = document.querySelector("section#theme")
const select = section.querySelector('.theme__select select[name="theme_name"]')
const options = section.querySelectorAll('.theme__option input[name="dark"]')

async function change(theme){
    const response = await fetch(`${BASE_URL}/theme`, {
        method : 'PUT',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({
			theme,
			isDark:THEME.isDark
		})
    });
	const colors = await response.json()
    await fetch(`${BASE_URL}/color`, {
        method : 'PUT',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(colors)
    });
	updateColor(colors)
	await Color.render()
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
