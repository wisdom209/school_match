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


