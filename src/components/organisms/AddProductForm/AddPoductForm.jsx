import React, {useState, useEffect}  from "react"
import { useDispatch, useSelector} from 'react-redux'
import { store, addProduct, productActions } from '../../../app/store'
import { TextField, Button, Fab  } from "@mui/material"
import IconButton from '@mui/material/IconButton'
import CropFreeIcon from '@mui/icons-material/CropFree';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';


// import { ScanProduct } from "../ScanProduct/ScanProduct"


export const AddProductForm = () => {
    const dispatch = useDispatch()
    const productStatus = useSelector(state => state.products.status)
    
    const [productname, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [produceradress, setProducerAdress] = useState("");
    const [productimg, setProductImg] = useState("");

    const [barcodeproduct, setBarcodeProduct] = useState("");

    const [scan, setScanner] = useState(false)

    useEffect(() => {
        if (productStatus === 'fulfilled') {
            
            alert("Ajout réussi !")
        }
        dispatch(productActions.resetStatus())
      }, [productStatus, dispatch])

if (scan === false) {
    return(
        <div style={{textAlign: "center"}}>
            <h3>Veuillez ajouter un produit</h3>
            <form>
                <TextField 
                    style={{ width: "350px", margin: "5px" }}
                    type="text"
                    label="Nom"
                    variant="outlined"
                    value={productname}
                    onChange={(e) => setProductName(e.target.value)}
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
                <TextField
                    style={{ width: "350px", margin: "5px" }}
                    type="text"
                    label="Adresse du producteur"
                    variant="outlined"
                    value={produceradress}
                    onChange={(e) => setProducerAdress(e.target.value)}
                />
                {/* <br/>
                <br/>
                <label htmlFor="upload-photo">
                <TextField
                    style={{ display: "none", width: "350px", margin: "5px" }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                    value={productimg}
                    onChange={(e) => setProductImg(e.target.value)}
                />
                <IconButton 
                    color="primary"
                    size="medium"
                    component="span"
                    aria-label="add"
                    variant="contained">
                    <AddPhotoAlternateIcon /> Importer une image
                </IconButton>
                </label> */}
                <br/>
                <br/>
                <Button onClick={() => {store.dispatch(addProduct({
                    productname : productname,
                    description : description,
                    price : price,
                    produceradress: produceradress,
                    productimg: '.png'
                }
                ))
                console.log("Status : "+productStatus)}} variant="contained" color="primary" style={{ width: "200px", margin: "5px", marginLeft: 10 }}>
                    Ajouter
                </Button>

                <IconButton
                    color="primary"
                    aria-label="scan a product" 
                    size='large'
                    variant="contained"
                    sx={{ marginLeft: 5 }}
                    onClick={() => setScanner(true)}>
                    <CropFreeIcon />
                </IconButton>

            </form>
        </div>
    )
} else if (scan === true) {
    return (
        <div style={{textAlign: "center"}}>
        <p>Scanner</p>
        <TextField 
                    style={{ width: "350px", margin: "5px" }}
                    type="text"
                    label="Code barre"
                    variant="outlined"
                    value={barcodeproduct}
                    onChange={(e) => setBarcodeProduct(e.target.value)}
        />
        <Button onClick={() => setScanner(false)} variant="contained" color="primary" style={{ width: "200px", margin: "5px", marginLeft: 10 }}>
            Envoyer
        </Button>
        <Button onClick={() => setScanner(false)} variant="contained" color="primary" style={{ width: "200px", margin: "5px", marginLeft: 10 }}>
            Retour
        </Button>
        {/* <ScanProduct/> */}
        </div>
    )
}
}