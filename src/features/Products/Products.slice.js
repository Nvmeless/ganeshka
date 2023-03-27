import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
    'product/getAll',
    async () => {
        return await fetch(process.env.REACT_APP_URL_BACK + "/items/products")
            .then(product => 
               product.json()
            )
            .catch(err => console.log("erreur dans la récupèration des produits : ", err))
    }
)

export const addProduct = createAsyncThunk(
    'product/addOne',
    async ({ name, description, price }) => {

        return await fetch(process.env.REACT_APP_URL_BACK + "/items/products", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                description: description,
                price: price
            })
        })
            .then(response => response.json())
            .then(product => product.data)
            .catch(err => console.log("erreur dans l'ajout du produit : ", err))
    }
)

export const updateLikeProduct = createAsyncThunk(
    'product/addLike',
    async ({ id, like }) => {

        return await fetch(process.env.REACT_APP_URL_BACK + "/items/products/" + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                numberLike: like,
            })
        })
            .then(response => response.json())
            .then(product => product.data)
            .catch(err => console.log("erreur dans le like du produit : ", err))
    }
)

const ProductServices = createSlice({
    name: 'products',
    initialState: {
        productsList: [],
        status: 'idle'
    },
    reducers: {
        resetStatus(state) {
            state.status = 'idle'
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.productsList.push(action.payload)
                state.status = 'idle'
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                fetchProducts()
                state.status = action.meta.requestStatus
            })
            .addCase(updateLikeProduct.fulfilled, (state, action) => {
                fetchProducts()
                state.status = action.meta.requestStatus
            })
    }
})

export const productActions = { ...ProductServices.actions, ...ProductServices.extraActions }

export const productReducer = ProductServices.reducer