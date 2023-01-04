import { configureStore } from '@reduxjs/toolkit';

import authReducer from "../features/Auth/auth.slice";
import messageReducer from "../features/Auth/message.slice";
import { productReducer } from '../features/Products/Products.slice';
import { shopReducer } from '../features/Shops/Shops.slice';
export * from '../features/Products/Products.slice'
export * from '../features/Shops/Shops.slice'
export * from '../features/Auth/auth.slice'

export const store = configureStore({
  reducer: {
    auth : authReducer,
    message : messageReducer,
    products : productReducer,
    shops : shopReducer
  }
})



