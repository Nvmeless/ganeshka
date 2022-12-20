import { configureStore } from '@reduxjs/toolkit'
import notifications from '../notifications/stores/notifications'
import connectedUser from '../../authentication/login/stores/connectedUser'

export const store = configureStore({
  reducer: {
    notifications,
    connectedUser
  },
})
