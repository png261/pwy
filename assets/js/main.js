import { initData } from './data.js'
import API from './Api.js'
import Sys from './Sys.js'
import Color from './Color.js'
import Theme from './Theme.js'
import Wallpaper from './Wallpaper.js'
import Actions from './Actions.js'

async function render(){
	Sys.render()
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

async function run(){
	const connected = await API.init()
	if(!connected) return 
	await initData()
	await render()
	await events()
}
run()
