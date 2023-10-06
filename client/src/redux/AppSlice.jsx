import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
	name: 'app',
	initialState: { user: {} },
	reducers: {
		setUserData: (state, action) => {
			state.user = action.payload
		}
	}
})


export const {
	setUserData
} = appSlice.actions

export default appSlice.reducer
