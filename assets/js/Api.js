import { BASE_URL, updateBaseUrl, COLOR, THEME, WALLPAPER } from './data.js'

const init = async () => {
	const params = new URLSearchParams(window.location.search);

	updateBaseUrl(params.get('api') || localStorage.getItem('BASE_URL', BASE_URL))
	window.history.pushState({}, '', window.location.href.split('?')[0] );

	const response  = await fetch(`${BASE_URL}/health`)
	const { connected } = await response.json()

	if(connected) localStorage.setItem('BASE_URL', BASE_URL);
	return connected
}

const Color = {
	get: async () => {
		const response = await fetch(`${BASE_URL}/color`)
		return await response.json()
	},

	load: async () => {
		const response = await fetch(`${BASE_URL}/color/load`)
		return await response.json()
	},

	put: async (colors = COLOR) => {
		const response = await fetch(`${BASE_URL}/color`, {
			method : 'PUT',
			body : JSON.stringify(colors)
		});
		return await response.json()
	}
}

const Theme = {
	list: async () => {
		const response = await fetch(`${BASE_URL}/theme`);
		return await response.json()
	},

	color: async (theme, dark = true) => {
		const data = JSON.stringify({ theme, dark }) 
		const response = await fetch(`${BASE_URL}/theme/${theme}/?dark=${dark}`);
		return await response.json()
	}
}

const Wall = {
	get: async () => {
		const response = await fetch(`${BASE_URL}/wallpaper`);
		return await response.json()
	},

	load: async () => {
		const response = await fetch(`${BASE_URL}/wallpaper/load`)
		return await response.json()
	},

	put: async (id = WALLPAPER.current) => {
		const response = await fetch(`${BASE_URL}/wallpaper/${id}`, {
			method : 'PUT',
		});
		return await response.json()
	},

	get_color: async () => {
		const response = await fetch(`${BASE_URL}/wallpaper/${WALLPAPER.current}/color`)
		return await response.json()
	},

	upload: async (files) => {
		let data = new FormData()
		files.map(file => data.append("files", file))

		const response = await fetch(`${BASE_URL}/wallpaper`, {
			method : 'POST',
			body : data
		});
		return await response.json()
	},

	remove: async (id) => {
		const response = await fetch(`${BASE_URL}/wallpaper/${id}`, {
			method : 'DELETE',
		});
		return await response.json()
	}
}

const Sys = {
	get: async () => {
		const response = await fetch(`${BASE_URL}/sys`)
		return await response.json()
	},

	reset: async () => {
		const response = await fetch(`${BASE_URL}/reset`)
		return await response.json()
	},

}

export default {
	init,
	Color,
	Theme,
	Wall,
	Sys
}
