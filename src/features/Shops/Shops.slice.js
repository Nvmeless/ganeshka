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

const ShopServices = createSlice({
    name: 'shop',
    initialState: {
        shopsList: [],
        status: 'idle'
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchShops.fulfilled, (state, action) => {
                state.shopsList.push(action.payload)
            })
    }
})

export const shopActions = { ...ShopServices.actions, ...ShopServices.extraActions }

export const shopReducer = ShopServices.reducer