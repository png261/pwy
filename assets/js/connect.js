import { isConnected, $, redirect } from './helper.js';

const input = $('#connect input');
const button = $('#connect button');

async function connect() {
    const api = input.value;
    if (!(await isConnected(api))) return (input.value = '');
    redirect(`?api=${api}`)
}

function events() {
    button.addEventListener('click', connect);
}
events();
