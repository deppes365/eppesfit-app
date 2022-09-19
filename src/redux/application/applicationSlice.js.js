import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loggedIn: false,
	darkModeActive: false,
	loading: true
};

export const applicationSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		darkMode: state => {
           state.darkModeActive = !state.darkModeActive
        },
		loading: (state, action) => {
			state.loading = action.payload
		}
	},
});

// Action creators are generated for each case reducer function
export const { darkMode, loading } = applicationSlice.actions;

export default applicationSlice.reducer;
