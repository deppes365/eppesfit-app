import { configureStore } from '@reduxjs/toolkit'
import applicationReducer from './application/applicationSlice.js';
import notificationReducer from './notification/notifcationSlice.js'

export const store = configureStore({
  reducer: {
    app: applicationReducer,
    notification: notificationReducer,
  },
})

