import React from "react"
import { useDispatch} from 'react-redux'
import { store, addProduct } from '../../../app/store'
import { TextField } from "@mui/material"
import { Button } from "@mui/material"

export const AddProductForm = () => {
    const dispatch = useDispatch()
    const product = {
        name: '',
        description: '',
        price: ''
    }

    return(
        <div style={{textAlign: "center"}}>
            <h3>Veuillez ajouter un produit</h3>
            <form>
                <TextField 
                    style={{ width: "350px", margin: "5px" }}
                    type="text"
                    label="Nom"
                    variant="outlined"
                    value={this.product.name}
                />
                <br/>
                <TextField
                    style={{ width: "350px", margin: "5px" }}
                    type="text"
                    label="Description"
                    variant="outlined"
                    value={this.product.description}
                />
                <br/>
                <TextField
                    style={{ width: "350px", margin: "5px" }}
                    type="number"
                    label="Prix"
                    variant="outlined"
                    value={this.product.price}
                />
                <br/>
                <p>Ce produit sera enregistré à vos coordonnées GPS.</p>
                <Button onClick={() => store.dispatch(addProduct(this.product))} variant="contained" color="primary" style={{ width: "200px", margin: "5px" }}>
                    Ajouter
                </Button>
            </form>
        </div>
    )

}