import { cleanUrl, getParam, isConnected } from './helper.js'

let BASE_URL = ''

async function init() {
    BASE_URL = cleanUrl(getParam('api'))
    if (!(await isConnected(BASE_URL))) return false
    return true
}

async function get(url) {
    return await fetch(`${BASE_URL}/${url}`).then((response) => response.json())
}

async function put(url, data = {}) {
    return await fetch(`${BASE_URL}/${url}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    }).then((response) => response.json())
}

async function upload(url, files) {
    let data = new FormData()
    files.map((file) => data.append('files', file))

    return await fetch(`${BASE_URL}/${url}`, {
        method: 'POST',
        body: data,
    }).then((response) => response.json())
}

export { BASE_URL }

export default {
    init,
    get,
    put,
    upload,
}
