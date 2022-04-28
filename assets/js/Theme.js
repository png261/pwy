import { THEME } from './data.js'
import * as Color from './Color.js'
import API from './Api.js'

const section = document.querySelector('section#theme')
const select = section.querySelector('.theme__select select[name="theme_name"]')
const dark_option = section.querySelector('.theme__option input[name="dark"]')

async function change(theme){
	const colors = await API.theme_put(theme)
	API.color_put(colors) 
	await Color.render(colors)
}

export async function render(){
	const dark = dark_option.checked ? 'dark' : 'light'
	select.innerHTML = THEME[dark].reduce((html,theme) => html +=`<option>${theme}</option>`,"") 
}

export async function events(){
	select.addEventListener('change', function (){
		change(this.value)
	}) 

    dark_option.addEventListener('change',render)
}
