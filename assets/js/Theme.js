import { THEME, updateColor } from './data.js';
import Color from './Color.js';
import API from './Api.js';

const section = document.querySelector('section#theme');
const select = section.querySelector(
    '.theme__select select[name="theme_name"]'
);
const dark_option = section.querySelector('.theme__option input[name="dark"]');

async function change(theme) {
    const colors = await API.Theme.color(theme);
    updateColor(colors);
    Color.render(colors);
}

function render() {
    const dark = dark_option.checked ? 'dark' : 'light';
    select.innerHTML = THEME[dark].reduce((html, theme) => {
        return (html += `<option>${theme}</option>`);
    }, '');
}

function events() {
    select.addEventListener('change', function () {
        change(this.value);
    });

    dark_option.addEventListener('change', render);
}

export default {
    render,
    events,
};
