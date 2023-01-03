import { configureStore } from '@reduxjs/toolkit'
import notifications from '../notifications/stores/notifications'
import connectedUser from '../../authentication/login/stores/connectedUser'
import fitnessTrailApi from '../../shared/api/stores/api'

export const store = configureStore({
  reducer: {
    notifications,
    connectedUser,
    fitnessTrailApi,
  },
})
