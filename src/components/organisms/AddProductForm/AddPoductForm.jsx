import React, {useState}  from "react"
import { useDispatch} from 'react-redux'
import { store, addProduct } from '../../../app/store'
import { TextField } from "@mui/material"
import { Button } from "@mui/material"

export const AddProductForm = () => {
    const dispatch = useDispatch()
    
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    return(
        <div style={{textAlign: "center"}}>
            <h3>Veuillez ajouter un produit</h3>
            <form>
                <TextField 
                    style={{ width: "350px", margin: "5px" }}
                    type="text"
                    label="Nom"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br/>
                <TextField
                    style={{ width: "350px", margin: "5px" }}
                    type="text"
                    label="Description"
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br/>
                <TextField
                    style={{ width: "350px", margin: "5px" }}
                    type="number"
                    label="Prix"
                    variant="outlined"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <br/>
                <p>Ce produit sera enregistré à vos coordonnées GPS.</p>
                <Button onClick={() => store.dispatch(addProduct({
                    name : name,
                    description : description,
                    price : price
                }))} variant="contained" color="primary" style={{ width: "200px", margin: "5px" }}>
                    Ajouter
                </Button>
            </form>
        </div>
    )

}