import {THEME,OPTIONS,loadColor,BASE_URL} from "./data.js"
import * as Color from "./Color.js"

const section = document.querySelector("section#theme")
const theme_select = section.querySelector('.theme__select select[name="theme_name"]')
const theme_option = section.querySelectorAll('.theme__option input[name="dark"]')

export async function change(name){
    await fetch(`${BASE_URL}/theme`, {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({
			name,
			dark:OPTIONS.theme_dark
		})
    });
	await loadColor()
	await Color.render()
}

export async function render(){
	const dark = OPTIONS.theme_dark ? "dark" : "light"
	theme_select.innerHTML = THEME[dark].reduce((html,theme) => html +=`<option>${theme}</option>`,"") 
}

export async function events(){
	theme_select.addEventListener("change", async function() {
		change(this.value)
	}) 

    theme_option.forEach(option => {
		option.addEventListener("change",function (){
			OPTION.theme_dark= this.checked
			render()
		})
	});
}
