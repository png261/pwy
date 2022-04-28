import { SYS } from './data.js'

const section = document.querySelector('section#sys')
const title = section.querySelector('h1')

export function render(){
	const {os,name} = SYS
	title.innerHTML = `Connected ${name}-${os}`
}
