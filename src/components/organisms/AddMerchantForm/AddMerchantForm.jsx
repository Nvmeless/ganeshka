import React, {useState, useEffect}  from "react"
import { useDispatch, useSelector} from 'react-redux'
import { store, addShop, shopActions } from '../../../app/store'
import { TextField } from "@mui/material"
import { Button } from "@mui/material"


export const AddMerchantForm = () => {
    const dispatch = useDispatch()
    const shopStatus = useSelector(state => state.shops.status)
    
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [horaire, setHoraire] = useState("");

    useEffect(() => {
        if (shopStatus === 'fulfilled') {
            
            alert("Ajout réussi !")
        }
        dispatch(shopActions.resetStatus())
      }, [shopStatus, dispatch])


    return(
        <div style={{textAlign: "center"}}>
            <h3>Veuillez ajouter une boutique</h3>
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
                    type="text"
                    label="Horaire"
                    variant="outlined"
                    value={horaire}
                    onChange={(e) => setHoraire(e.target.value)}
                />
                <br/>
                <p>Cette boutique sera enregistré à vos coordonnées GPS.</p>
                <Button onClick={() => {store.dispatch(addShop({
                    name : name,
                    description : description,
                    horaire : horaire
                }
                ))
                console.log("Status : "+shopStatus)}} variant="contained" color="primary" style={{ width: "200px", margin: "5px" }}>
                    Ajouter
                </Button>
            </form>
        </div>
    )

}