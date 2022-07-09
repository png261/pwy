import API from './Api.js'
const section = document.querySelector('section#action')
const reset_btn = section.querySelector('#reset')
const change_btn = section.querySelector('#change')

function events () {
    reset_btn.addEventListener('click', async () => {
		await API.Sys.reset()
		await API.Color.load()
		await API.Wall.load()
	})

    change_btn.addEventListener('click', async () => { 
		await API.Wall.put()
		await API.Color.put()
		await API.Wall.load()
		await API.Color.load()
	})
}

export default {
	events
}
