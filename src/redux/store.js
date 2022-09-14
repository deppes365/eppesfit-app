import { configureStore } from '@reduxjs/toolkit'
import applicationReducer from './application/applicationSlice.js';
import notificationReducer from './notification/notifcationSlice.js'
import userReducer from './user/userSlice'
import workoutReducer from './workout/workoutSlice'

export const store = configureStore({
  reducer: {
    app: applicationReducer,
    notification: notificationReducer,
    user: userReducer,
    workout: workoutReducer
  },
})

