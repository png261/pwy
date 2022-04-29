import { initData } from './data.js'

import * as Connect from './Connect.js'
import * as Sys from './Sys.js'
import * as Settings from './Settings.js'
import * as Color from './Color.js'
import * as Theme from './Theme.js'
import * as Wallpaper from './Wallpaper.js'
import * as Actions from './Actions.js'

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
