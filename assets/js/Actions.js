import API from './Api.js'
const section = document.querySelector('section#action')
const reset_btn = section.querySelector('#reset')
const change_btn = section.querySelector('#change')

export function events () {
    reset_btn.addEventListener('click', API.reset)
    change_btn.addEventListener('click', () => { 
		API.wallpaper_load()
		API.color_load()
	})
}
