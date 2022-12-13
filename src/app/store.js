import { configureStore } from '@reduxjs/toolkit';
import  ProductServices, { getAllProducts }  from '../features/Products/Products';

export const store = configureStore({
  reducer: {
    products : ProductServices

  }
})



