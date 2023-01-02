import { configureStore } from '@reduxjs/toolkit';

import { productReducer } from '../features/Products/Products.slice';
import { shopReducer } from '../features/Shops/Shops.slice';
export * from '../features/Products/Products.slice'
export * from '../features/Shops/Shops.slice'

export const store = configureStore({
  reducer: {
    products : productReducer,
    shops : shopReducer
  }
})



