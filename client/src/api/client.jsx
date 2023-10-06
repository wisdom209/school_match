import axios from 'axios'
import Cookie from 'js-cookie'

const baseUrl = 'http://127.0.0.1:8000'

export const searchGeneral = async () => {
	const link = '/api/school/search'
	const endpoint = baseUrl + link

	return axios.get(endpoint,
	).then(response => {
		return response.data
	}).catch((err) => {
		return { error: err.message, data: null }
	})
}

export const createUser = async (post_object) => {
	const link = baseUrl + '/api/user/create-account'

	if (post_object?.confirm_password != post_object?.password) {
		return { error: "password and confirm password do not match", data: null }
	}

	return axios.post(link, post_object).then(response => {
		return response.data
	}).catch((err) => {
		const msg = (Object.values(err.response.data.errors)[0][0])
		return { error: msg, data: null }
	})
}

export const signInUser = async (post_object) => {
	const link = baseUrl + '/api/user/login/'

	return axios.post(link, post_object).then(response => {
		return response.data
	}).catch((err) => {
		const msg = (Object.values(err.response.data)[0][0])
		return { error: msg, data: null }
	})
}

export const getUserProfile = async () => {
	const link = baseUrl + '/api/user/profile'
	const token = Cookie.get('token')

	return axios.get(link, {
		headers: {
			Authorization: `Token ${token}`
		}
	}).then(res => {
		return { error: null, data: res.data }
	}).catch(err => {
		return { error: err, data: null }
	})
}

export const updateUserProfile = async (post_object, user_id) => {
	const link = baseUrl + `/user/profile/${user_id}`
	const token = Cookie.get('token')

	console.log(link)

	return axios.put(link, post_object, {
		headers: {
			Authorization: `Token ${token}`
		}
	}).then(response => {
		console.log(response)
		return response.data
	}).catch((err) => {
		console.log(err)

		return { error: err, data: null }
	})
}

export const addToFavorite = async (user_id, dept_id) => {
	const link = baseUrl + '/api/user/favorite/1'
	const token = Cookie.get('token')

	return axios.post(link, { user: user_id, department: dept_id }, {
		headers: {
			Authorization: `Token ${token}`
		}
	}).then(res => {
		return { error: null, data: res.data }
	}).catch(err => {
		return { error: err, data: null }
	})
}

export const getFavorites = async (user_id, dept_id) => {
	const link = baseUrl + '/api/user/favorites/'
	const token = Cookie.get('token')

	return axios.get(link, {
		headers: {
			Authorization: `Token ${token}`
		}
	}).then(res => {
		return { error: null, data: res.data }
	}).catch(err => {
		return { error: err, data: null }
	})
}


export const search = async (value) => {
	const link = baseUrl + '/api/user/favorites/'
	const token = Cookie.get('token')

	return axios.get(link, {
		headers: {
			Authorization: `Token ${token}`
		},
		params: {
			search: value
		}
	}).then(res => {
		console.log(res, 'year')
	}).catch(err => {
		console.log(err)
	})
}
