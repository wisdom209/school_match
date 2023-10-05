import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
	name: 'app',
	initialState: { media: {}, username: '', genres: {} },
	reducers: {
		setPopularMovies: (state, action) => {
			state.media['popularMovies'] = action.payload
		},
		setPopularSeries: (state, action) => {
			state.media['popularSeries'] = action.payload
		},
		setTopratedMovies: (state, action) => {
			state.media['topratedMovies'] = action.payload
		},
		setTopratedSeries: (state, action) => {
			state.media['topratedSeries'] = action.payload
		},
		setSimilar: (state, action) => {
			state.media['similar'] = action.payload
		},
		setVideo: (state, action) => {
			state.media['video'] = action.payload
		},
		setMediaDetail: (state, action) => {
			state.media['mediaDetail'] = action.payload
		},
		setPersonDetail: (state, action) => {
			state.media['personDetail'] = action.payload
		},
		setUsername: (state, action) => {
			state.username = action.payload
		},
		setGenres: (state, action) => {
			state.genres = action.payload
		}
	}
})


export const { setPopularMovies, setPopularSeries, setTopratedSeries, setTopratedMovies,
	setMediaDetail, setSimilar, setVideo, setPersonDetail, setUsername, setGenres
} = appSlice.actions

export default appSlice.reducer
