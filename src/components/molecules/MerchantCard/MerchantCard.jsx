import React from "react";
import { Card } from "@mui/material";
import {MapCheckPoint} from "../MapCheckPoint/MapCheckPoint.jsx"



export const MerchantCard = ({...props}) => {

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