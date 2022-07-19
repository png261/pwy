import API from './api.js'
import { $ } from './helper.js'
import { THEME, COLOR } from './data.js'
import Color from './Color.js'

const $select = $('.theme__select>select')
const $dark = $('.theme__option input[name="dark"]')

function render() {
    function html(themes) {
        return themes.reduce(
            (html, theme) => (html += `<option>${theme}</option>`),
            ''
        )
    }
    $select.innerHTML = html($dark.checked ? THEME.dark : THEME.light)
}

function events() {
    async function change() {
        COLOR.set(await API.Theme.color($select.value))
        Color.render()
    }

    $select.addEventListener('change', change)
    $dark.addEventListener('change', () => {
        THEME.isDark = $dark.checked
        render()
    })
}

export default {
    render,
    events,
}
