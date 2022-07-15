import { THEME, updateColor } from './data.js';
import Color from './Color.js';
import API from './Api.js';
import { $ } from './helper.js';

const select = $('.theme__select>select');
const dark = $('.theme__option input[name="dark"]');

async function change() {
    updateColor(await API.Theme.color(this.value));
    Color.render();
}

function render() {
    const list = THEME[dark.checked ? 'dark' : 'light'];
    select.innerHTML = list.reduce(
        (html, theme) => (html += `<option>${theme}</option>`),
        ''
    );
}

function events() {
    select.addEventListener('change', change);
    dark.addEventListener('change', render);
}

export default {
    render,
    events,
};
