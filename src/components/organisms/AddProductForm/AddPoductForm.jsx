import React from "react"
import { TextField } from "@mui/material"
import { Button } from "@mui/material"

export const AddProductForm = ({...props}) => {
    
    return(
        <div style={{textAlign: "center"}}>
            <h3>Veuillez ajouter un produit</h3>
            <form>
                <TextField 
                    style={{ width: "350px", margin: "5px" }}
                    type="text"
                    label="Nom"
                    variant="outlined"
                />
                <br/>
                <TextField
                    style={{ width: "350px", margin: "5px" }}
                    type="text"
                    label="Description"
                    variant="outlined"
                />
                <br/>
                <TextField
                    style={{ width: "350px", margin: "5px" }}
                    type="number"
                    label="Prix"
                    variant="outlined"
                />
                <br/>
                <p>Ce produit sera enregistré à vos coordonnées GPS.</p>
                <Button variant="contained" color="primary" style={{ width: "200px", margin: "5px" }}>
                    Ajouter
                </Button>
            </form>
        </div>
    )

}