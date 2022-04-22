const section = document.querySelector("section#connect")
const input = section.querySelector('.connect__input')
const submit = section.querySelector('.connect__submit')

export function events(){
	submit.addEventListener("click",function(){
		console.log(input.value)
	})
}


