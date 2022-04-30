import { initData } from './data.js'

import Connect from './Connect.js'
import Sys from './Sys.js'
import Settings from './Settings.js'
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
	Connect.events()
	Settings.events()
	Wallpaper.events()
	Theme.events()
	Color.events()
	Actions.events()
}

async function run() {
	const hasData = await initData();
	if(!hasData) return
	await render()
	await events()
}
run()
