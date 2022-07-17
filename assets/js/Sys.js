import { SYS } from './data.js'
import { $ } from './helper.js'

const $title = $('.sys__title')

function render() {
    $title.innerHTML = `Connected ${SYS.getOs()}-${SYS.getName()}`
}

export default {
    render,
}
