import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const connectedUser = createSlice({
  name: 'connectedUser',
  initialState,
  reducers: {
    connect: (state, { payload }) => {
      state = payload
      return payload
    },
  },
})

export const { connect } = connectedUser.actions
export default connectedUser.reducer
