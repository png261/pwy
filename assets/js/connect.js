const section = document.querySelector('section#connect');
const input = section.querySelector('input');
const button = section.querySelector('button');
import API from './Api.js';

function events() {
    button.addEventListener('click', async () => {
        const api = input.value;
        if (!api) return;

        const ok = await API.checkhealth(api);
        if (!ok) return (input.value = '');

        window.location.replace(window.location.origin + '/pwy/?api=' + api);
    });
}
events();
