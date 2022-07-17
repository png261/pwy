import API from './api.js'

let COLOR
let THEME
let WALLPAPER
let SYS

class Wallpaper {
    constructor({ current, list }) {
        this.current = current
        this.list = list
    }
    get() {
        return this.list
    }
    getCurrent() {
        return this.current
    }
    setCurrent(id) {
        this.current = id
    }
}

class Theme {
    constructor({ dark, light }) {
        this.dark = dark
        this.light = light
    }
    getDark() {
        return this.dark
    }
    getLight() {
        return this.light
    }
}

class Color {
    constructor(colors) {
        this.colors = colors
    }
    get() {
        return this.colors
    }
    put({ name, value }) {
        this.colors[name] = value
    }
    set(colors) {
        this.colors = colors
    }
}

class Sys {
    constructor({ os, name }) {
        this.os = os
        this.name = name
    }
    getOs() {
        return this.os
    }
    getName() {
        return this.name
    }
}

async function init() {
    WALLPAPER = new Wallpaper(await API.Wall.get())
    THEME = new Theme(await API.Theme.get())
    COLOR = new Color(await API.Color.get())
    SYS = new Sys(await API.Sys.get())
}

export { COLOR, THEME, WALLPAPER, SYS, init }
