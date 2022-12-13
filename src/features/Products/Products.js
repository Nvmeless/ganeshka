import { createSlice } from '@reduxjs/toolkit'

export const ProductServices = createSlice({
    name: 'products',
    initialState: {
        productsList: "Yo"
    },

    reducers: {
        getAllProducts: state => {

            // const fetchPromise = fetch(process.env.REACT_APP_URL_BACK+"/items/products");
            // fetchPromise.then(response => {
            //     return response.json();
            //   }).then(product => {
            //     console.log(product);
            //   });
            console.log("APPEL")
            state.productsList = "salut"


            
            }
    
    }
})

export const {getAllProducts} = ProductServices.actions

export default ProductServices.reducer