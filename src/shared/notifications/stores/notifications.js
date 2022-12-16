import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const notifications = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    add: (state, { payload: { message, isError } }) => {
      state.push({ message, isError })
      return state
    },
    remove: (state, { payload: indexToRemove }) => {
      state = state.filter(((_notification, index) => index !== indexToRemove))
      return state
    }
  },
})

export const { add, remove } = notifications.actions
export default notifications.reducer
