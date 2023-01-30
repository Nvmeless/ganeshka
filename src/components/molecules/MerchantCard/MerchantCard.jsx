import React from "react";
import { Card } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {MapCheckPoint} from "../MapCheckPoint/MapCheckPoint.jsx"
import { useState } from 'react';
import { store, updateFavoriteShop } from '../../../app/store'


export const MerchantCard = ({...props}) => {

    const [state, setState] = useState({
        fav: props.favorite
    });

    const styleCard = {
        display : "flex",
        height:"5%",
        margin:"15px"
    }

    const styleImg = {
        width:"5%",
        height:"5%",
        margin : "1%",
        "textAlign": "center",
        "verticalAlign": "sub"
    }

    const styleDivTitleDescription = {
        width:"70%",
        height:"50%"
    }

    const styleDescription = {
        display : "flex",
        height: "50%"
    }


    const styleDivMapCheckpoint = {
        width:"19%",
        "textAlign": "center",
        "verticalAlign": "sub"

    }

    const styleTitle = {
        display : "flex",
        height: "10%"
    }

    const styleMapCheckPoint = {
        display : "flex",
        height: "20%",
        "textAlign": "center",
        "verticalAlign": "sub"
        
    }
    
    return (
         <>
        <Card style={styleCard}>
            <img src={props.src} style={styleImg} alt={"img"+props.title}></img>

            <div style={styleDivTitleDescription}>
            <h1 style={styleTitle}>{props.title}</h1>
            {state.fav === 1 ? <StarIcon onClick={() => {
                    setState({
                        fav: state.fav = 0
                    }) 
                    store.dispatch(updateFavoriteShop({
                        id : props.id,
                        favoritevalue : 0
                    }))}}></StarIcon> : <StarBorderIcon onClick={() => {
                        setState({
                            fav: state.fav = 1
                        })    
                    store.dispatch(updateFavoriteShop({
                        id : props.id,
                        favoritevalue : 1
                    }))}}></StarBorderIcon>}
            <p style={styleDescription}>{props.description}</p>
            </div>
            
            <div style={styleDivMapCheckpoint}>
                <p>{props.price}</p>
                <MapCheckPoint text={props.checkpointDistance} style={styleMapCheckPoint}></MapCheckPoint>

            </div>

        </Card>
        
        </>
    )
    
}