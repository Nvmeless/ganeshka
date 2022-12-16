import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
    'product/getAll',
    async () => {
        return await fetch(process.env.REACT_APP_URL_BACK + "/items/products")
            .then(response => response.json())
            .then(product => product.data)
            .catch(err => console.log("erruer: ", err))
    }
)

const ProductServices = createSlice({
    name: 'products',
    initialState: {
        productsList: []
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.productsList.push(action.payload)
            })
    }
})

export const productActions = { ...ProductServices.actions, ...ProductServices.extraActions }

export const productReducer = ProductServices.reducer