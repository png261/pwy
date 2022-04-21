import {THEME,OPTIONS,loadColor,BASE_URL} from "./data.js"
import * as Color from "./Color.js"

const section = document.querySelector("section#theme")
const select = section.querySelector('.theme__select select[name="theme_name"]')
const options = section.querySelectorAll('.theme__option input[name="dark"]')

async function change(name){
    await fetch(`${BASE_URL}/theme`, {
        method : 'PUT',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({
			name,
			isDark:THEME.isDark
		})
    });
	await loadColor()
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
