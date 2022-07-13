import { initData } from './data.js'
import API from './Api.js'
import Sys from './Sys.js'
import Color from './Color.js'
import Theme from './Theme.js'
import Wallpaper from './Wallpaper.js'
import Actions from './Actions.js'

function render(){
    document.querySelector("body").classList.remove("loading")

	Sys.render()

    Color.updateCssVar()
    Wallpaper.updateCssVar()

	Wallpaper.render()
	Color.render()

	Theme.render()
}

function events(){
	Wallpaper.events()
	Theme.events()
	Color.events()
	Actions.events()
}

( async function run(){
	const isConnected = await API.init()
	if(!isConnected) {
		window.location.replace(window.location.origin + "/pwy/connect.html")
		return
	} 
	await initData()
	render()
	events()
} )()
