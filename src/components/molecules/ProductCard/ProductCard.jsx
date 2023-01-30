import React from "react";
import { Card } from "@mui/material";
import { MapCheckPoint } from "./../MapCheckPoint/MapCheckPoint.jsx"
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useState } from 'react';
import { store, updateLikeProduct } from '../../../app/store'

export const ProductCard = ({ ...props }) => {

    
    const [state, setState] = useState({
        like: props.like
    });

    const styleCard = {
        display: "flex",
        height: "5%",
        margin: "15px"
    }

    const styleImg = {
        width: "5%",
        height: "5%",
        margin: "1%",
        "textAlign": "center",
        "verticalAlign": "sub"
    }

    const styleDivTitleDescription = {
        width: "70%",
        height: "50%"
    }

    const styleDescription = {
        display: "flex",
        height: "50%"
    }


    const styleDivMapCheckpoint = {
        width: "19%",
        "textAlign": "center",
        "verticalAlign": "sub"

    }

    const styleTitle = {
        display: "flex",
        height: "10%"
    }

    const styleMapCheckPoint = {
        display: "flex",
        height: "20%",
        "textAlign": "center",
        "verticalAlign": "sub"

    }

    return (
        <>
            <Card style={styleCard}>
                <img src={props.src} style={styleImg} alt={"img" + props.title}></img>

                <div style={styleDivTitleDescription}>
                    <h1 style={styleTitle}>{props.title}</h1>
                    <IconButton onClick={() => {setState({
                        like: state.like + 1
                    })
                    store.dispatch(updateLikeProduct({
                        id : props.id,
                        like : state.like + 1
                    }
                    ))}}><FavoriteIcon fontSize="large" color="error" /> &nbsp; {state.like}</IconButton>

                    <p style={styleDescription}>{props.description}</p>
                </div>
                <div style={styleDivMapCheckpoint}>
                    <p>{props.price}€</p>
                    <MapCheckPoint text={props.checkpointDistance} style={styleMapCheckPoint}></MapCheckPoint>

                </div>

            </Card>

        </>
    )

}