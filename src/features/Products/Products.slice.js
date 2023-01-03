import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
    'product/getAll',
    async () => {
        return await fetch(process.env.REACT_APP_URL_BACK + "/items/products")
            .then(response => response.json())
            .then(product => product.data)
            .catch(err => console.log("erreur dans la récupèration des produits : ", err))
    }
)

export const addProduct = createAsyncThunk(
    'product/addOne',
    async () => {
        return await fetch(process.env.REACT_APP_URL_BACK + "/items/products", {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer D69ohpAu8w5dG5XTjmbu0yqMng2SzHVX',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: "Pinot Noir",
                description: "Ici une super description sur une boisson d'exception",
                price: "29"
              })
        })
            .then(response => response.json())
            .then(product => product.data)
            .catch(err => console.log("erreur dans l'ajout du produit : ", err))
    }
)

const ProductServices = createSlice({
    name: 'products',
    initialState: {
        productsList: [],
        status: 'idle'
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.productsList.push(action.payload)
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                console.log("On a réussi ma gueugle")
            })
    }
})

export const productActions = { ...ProductServices.actions, ...ProductServices.extraActions }

export const productReducer = ProductServices.reducer