import API from './Api.js'
import { updateColor } from './data.js'
import Color from './Color.js'

const section = document.querySelector('section#action')
const reset_btn = section.querySelector('button#reset')
const change_btn = section.querySelector('button#change')

function events () {
    reset_btn.addEventListener('click', async () => {
		await API.Sys.reset()
		await API.Color.load()
		await API.Wall.load()

		const colors = await API.Color.get()
		Color.render(colors)
	})

    change_btn.addEventListener('click', async () => { 
		await API.Wall.put()
		await API.Wall.load()

		await API.Color.put()
		await API.Color.load()
	})
}

export default {
	events
}
