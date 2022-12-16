import { configureStore } from '@reduxjs/toolkit'
import notifications from '../notifications/stores/notifications'

export const store = configureStore({
  reducer: {
    notifications
  },
})
