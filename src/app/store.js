import { configureStore } from '@reduxjs/toolkit';

import { productReducer } from '../features/Products/Products.slice';
export * from '../features/Products/Products.slice'

export const store = configureStore({
  reducer: {
    products : productReducer

  }
})



