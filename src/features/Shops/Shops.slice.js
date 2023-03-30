import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchShops = createAsyncThunk(
    'shop/getAll',
    async () => {
        return await fetch(process.env.REACT_APP_URL_BACK + "/items/shops")
            .then(product => 
                product.json()
            )
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

export const addShop = createAsyncThunk(
    'product/addOne',
    async ({ shopName, shopDescription, shopAdress, Location_coordinates}) => {
        
        return await fetch(process.env.REACT_APP_URL_BACK + "/items/shops", {
            method: 'POST',
            body: JSON.stringify({
                lastName: "None",
                firstName: "None",
                email: "None",
                telNumber: "None",
                profilImg: "None",
                isShop: true,
                shopName: shopName,
                shopDescription: shopDescription,
                shopAdress: shopAdress,
                location: {
                    Location_type: "Point",
                    Location_coordinates: Location_coordinates
                }
              })
        })
        .then(shop => 
            shop.json()
         )
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

            .addCase(updateFavoriteShop.fulfilled, (state, action) => {
                fetchShops()
                state.status = action.meta.requestStatus
            })
            .addCase(addShop.fulfilled, (state, action) => {
                fetchShops()
                state.status = action.meta.requestStatus
                

            })
    }
})

export const shopActions = { ...ShopServices.actions, ...ShopServices.extraActions }

export const shopReducer = ShopServices.reducer