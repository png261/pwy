import API from './Api.js'
const section = document.querySelector('section#action')
const reset_btn = section.querySelector('#reset')
const change_btn = section.querySelector('#change')

function events () {
    reset_btn.addEventListener('click', API.reset)
    change_btn.addEventListener('click', async () => { 
		await API.wallpaper_put()
		await API.color_put()

		await API.wallpaper_load()
		await API.color_load()
	})
}

export default {
	events
}
