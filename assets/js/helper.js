import { PWY_API } from './data.js';

export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

export function redirect(path){
    window.location.replace(window.location.origin + '/pwy/' + path);
}

export function cleanUrl(url) {
    return url.replace(/\/+$/, '');
}

export function getParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

export async function isConnected(api) {
    if (!api) return false;
    return await fetch(api)
        .then(({ ok }) => ok)
        .catch(() => false);
}

export async function get(url) {
    return await fetch(`${PWY_API}/${url}`).then((response) => response.json());
}

export async function remove(url) {
    return await fetch(`${PWY_API}/${url}`, { method: 'DELETE' }).then(
        (response) => response.json()
    );
}

export async function put(url, data = {}) {
    return await fetch(`${PWY_API}/${url}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    }).then((response) => response.json());
}

export async function upload(url, files) {
    let data = new FormData();
    files.map((file) => data.append('files', file));

    return await fetch(`${PWY_API}/${url}`, {
        method: 'POST',
        body: data,
    }).then((response) => response.json());
}
