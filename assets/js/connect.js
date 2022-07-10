const section = document.querySelector('section#connect')
const input = section.querySelector('input')
const button = section.querySelector('button')

function events(){
    button.addEventListener('click', () => {
		const api_url = input.value
		window.location.replace(window.location.origin + "?api=" + api_url)
	}) 
}
events()
