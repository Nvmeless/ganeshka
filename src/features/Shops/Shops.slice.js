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


export const updateFavoriteShop = createAsyncThunk(
    'shop/favorite',
    async ({ id, favoritevalue }) => {

        return await fetch(process.env.REACT_APP_URL_BACK + "/items/shops/" + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                favorite: favoritevalue,
            })
        })
            .then(response => response.json())
            .then(shop => shop.data)
            .catch(err => console.log("erreur dans l'ajout au favori : ", err))
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
            .addCase(updateFavoriteShop.fulfilled, (state, action) => {
                fetchShops()
                state.status = action.meta.requestStatus
            })
    }
})

export const shopActions = { ...ShopServices.actions, ...ShopServices.extraActions }

export const shopReducer = ShopServices.reducer