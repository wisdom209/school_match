import axios from 'axios'
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
