import { BASE_URL, COLOR, THEME, WALLPAPER } from './data.js'

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
			headers : {'Content-Type' : 'application/json'},
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
			body : data
		});
		return await response.json()
	}
}

const Sys = {
	health: async () => {
		const response  = await fetch(`${BASE_URL}/health`)
		const result = await response.json()
		return result.connected 
	}, 

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
	Color,
	Theme,
	Wall,
	Sys
}
