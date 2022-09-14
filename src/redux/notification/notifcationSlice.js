import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	message: 'Hello',
	error: false,
	showNotification: false,
};

export const notificationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		successNotification: (state, action) => {
			state.error = false;
			state.message = action.payload;
			state.showNotification = true;
		},
		errorNotification: (state, action) => {
			state.error = true;
			state.message = action.payload;
			state.showNotification = true;
		},
		closeNotification: state => {
			state.message = '';
			state.showNotification = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { successNotification, errorNotification, closeNotification } =
	notificationSlice.actions;

export default notificationSlice.reducer;
