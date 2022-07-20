export const $ = document.querySelector.bind(document)
export const $$ = document.querySelectorAll.bind(document)

export function redirect(path) {
    window.location.replace(window.location.origin + '/pwy/' + path)
}

export function cleanUrl(url) {
    return url.replace(/\/+$/, '')
}

export function getParam(name) {
    const params = new URLSearchParams(window.location.search)
    return params.get(name)
}

export async function isConnected(api) {
    return await fetch(`${api}/health`)
        .then(({ ok }) => ok)
        .catch(() => false)
}

export function setCssVar(name, value) {
    document.documentElement.style.setProperty(`--${name}`, value)
}
