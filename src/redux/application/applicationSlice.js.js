import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loggedIn: false,
	darkModeActive: false,
};

export const applicationSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		darkMode: state => {
           state.darkModeActive = !state.darkModeActive
        },
	},
});

// Action creators are generated for each case reducer function
export const { darkMode } = applicationSlice.actions;

export default applicationSlice.reducer;
