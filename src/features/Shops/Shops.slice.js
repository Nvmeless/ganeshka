import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchShops = createAsyncThunk(
    'shop/getAll',
    async () => {
        return await fetch(process.env.REACT_APP_URL_BACK + "/items/shops")
            .then(response => response.json())
            .then(shop => shop.data)
            .catch(err => console.log("erreur dans la récupèration des shops : ", err))
    }
)

export const addShop = createAsyncThunk(
    'product/addOne',
    async ({ name, description, horaire }) => {
        
        return await fetch(process.env.REACT_APP_URL_BACK + "/items/shops", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                description: description,
                horaire: horaire
              })
        })
            .then(response => response.json())
            .then(product => product.data)
            .catch(err => console.log("erreur dans l'ajout du marchant : ", err))
    }
)

const ShopServices = createSlice({
    name: 'shop',
    initialState: {
        shopsList: [],
        status: 'idle'
    },
    reducers: {
        resetStatus(state) {
            state.status = 'idle'
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchShops.fulfilled, (state, action) => {
                state.shopsList.push(action.payload)
            })
            .addCase(addShop.fulfilled, (state, action) => {
                fetchShops()
                state.status = action.meta.requestStatus
                
            })
    }
})

export const shopActions = { ...ShopServices.actions, ...ShopServices.extraActions }

export const shopReducer = ShopServices.reducer