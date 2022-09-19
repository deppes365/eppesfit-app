import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loggedIn: false,
	darkModeActive: true,
	loading: true
};

export const applicationSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		darkMode: state => {
           state.darkModeActive = !state.darkModeActive
        },
		setLoading: (state, action) => {
			state.loading = action.payload
		}
	},
});

// Action creators are generated for each case reducer function
export const { darkMode, setLoading } = applicationSlice.actions;

export default applicationSlice.reducer;
