import { updateBaseUrl, BASE_URL } from './data.js'
const section = document.querySelector('section#connect')
const input = section.querySelector('.connect__input')
const submit = section.querySelector('.connect__submit')

export function events(){
	submit.addEventListener('click',() => {
		const newUrl = input.value
		if(!newUrl) return
		updateBaseUrl(newUrl)
	})
}

export default {
	events
}
