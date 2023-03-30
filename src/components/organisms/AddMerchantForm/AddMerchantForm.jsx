import React, {useState, useEffect}  from "react"
import { useDispatch, useSelector} from 'react-redux'
import { store, addShop, shopActions } from '../../../app/store'
import { TextField } from "@mui/material"
import { Button } from "@mui/material"


export const AddMerchantForm = () => {
    const dispatch = useDispatch()
    const shopStatus = useSelector(state => state.shops.status)
    
    const [shopName, setShopName] = useState("");
    const [shopDescription, setShopDescription] = useState("");
    const [shopAdress, setShopAdress] = useState("");
    const [x, setX] = useState("");
    const [y, setY] = useState("");

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
                    value={shopName}
                    onChange={(e) => setShopName(e.target.value)}
                />
                <br/>
                <TextField
                    style={{ width: "350px", margin: "5px" }}
                    type="text"
                    label="Description"
                    variant="outlined"
                    value={shopDescription}
                    onChange={(e) => setShopDescription(e.target.value)}
                />
                <br/>
                <TextField
                    style={{ width: "350px", margin: "5px" }}
                    type="text"
                    label="Adresse"
                    variant="outlined"
                    value={shopAdress}
                    onChange={(e) => setShopAdress(e.target.value)}
                />
                <br/>
                <TextField
                    style={{ width: "350px", margin: "5px" }}
                    type="text"
                    label="X"
                    variant="outlined"
                    value={x}
                    onChange={(e) => setX(e.target.value)}
                />
                <br/>
                <TextField
                    style={{ width: "350px", margin: "5px" }}
                    type="text"
                    label="Y"
                    variant="outlined"
                    value={y}
                    onChange={(e) => setY(e.target.value)}
                />
                <br/>
                <p>Cette boutique sera enregistré à vos coordonnées GPS.</p>
                <Button onClick={() => {store.dispatch(addShop({
                     shopName: shopName,
                     shopDescription: shopDescription,
                     shopAdress: shopAdress,
                     Location_coordinates: [x, y]
                }
                ))
                console.log("Status : "+shopStatus)}} variant="contained" color="primary" style={{ width: "200px", margin: "5px" }}>
                    Ajouter
                </Button>
            </form>
        </div>
    )

}