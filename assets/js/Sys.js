const section = document.querySelector("section#sys")
const title = section.querySelector("h1")
import {SYS} from "./data.js"

export function render(){
	const {os,name} = SYS
	title.innerHTML = `Connected ${name}-${os}`
}
