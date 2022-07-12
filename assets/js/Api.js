import { PWY_API, updateApiUrl, COLOR, WALLPAPER } from './data.js';

const init = async () => {
    const params = new URLSearchParams(window.location.search);
    const api = params.get('api') || localStorage.getItem('PWY_API');

    updateApiUrl(api);
    window.history.pushState({}, '', window.location.href.split('?')[0]);

    const { ok } = await fetch(`${PWY_API}/health`);
    if (ok) localStorage.setItem('PWY_API', PWY_API);
    return ok;
};

const Color = {
    get: async () => {
        const response = await fetch(`${PWY_API}/color`);
        return await response.json();
    },

    load: async () => {
        const response = await fetch(`${PWY_API}/color/load`);
        return await response.json();
    },

    put: async (colors = COLOR) => {
        const response = await fetch(`${PWY_API}/color`, {
            method: 'PUT',
            body: JSON.stringify(colors),
        });
        return await response.json();
    },
};

const Theme = {
    get: async () => {
        const response = await fetch(`${PWY_API}/theme`);
        return await response.json();
    },

    color: async (theme, dark = true) => {
        const response = await fetch(`${PWY_API}/theme/${theme}/?dark=${dark}`);
        return await response.json();
    },
};

const Wall = {
    get: async () => {
        const response = await fetch(`${PWY_API}/wallpaper`);
        return await response.json();
    },

    load: async () => {
        const response = await fetch(`${PWY_API}/wallpaper/load`);
        return await response.json();
    },

    put: async (id = WALLPAPER.current) => {
        const response = await fetch(`${PWY_API}/wallpaper/${id}`, {
            method: 'PUT',
        });
        return await response.json();
    },

    get_color: async () => {
        const response = await fetch(
            `${PWY_API}/wallpaper/${WALLPAPER.current}/color`
        );
        return await response.json();
    },

    upload: async (files) => {
        let data = new FormData();
        files.map((file) => data.append('files', file));

        const response = await fetch(`${PWY_API}/wallpaper`, {
            method: 'POST',
            body: data,
        });
        return await response.json();
    },

    remove: async (id) => {
        const response = await fetch(`${PWY_API}/wallpaper/${id}`, {
            method: 'DELETE',
        });
        return await response.json();
    },
};

const Sys = {
    get: async () => {
        const response = await fetch(`${PWY_API}/sys`);
        return await response.json();
    },

    reset: async () => {
        const response = await fetch(`${PWY_API}/reset`);
        return await response.json();
    },
};

export default {
    init,
    Color,
    Theme,
    Wall,
    Sys,
};
