import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../slices/auth";
import messageReducer from "../slices/message";
import usersReducer from "../slices/user";

const reducer = {
  auth: authReducer,
  message: messageReducer,
  usersSlice: usersReducer,
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;
