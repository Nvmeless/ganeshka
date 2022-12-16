import React from "react";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { StyledMapCheckpointDiv } from './style.js'

export const MapCheckPoint = ({...props}) => {

    

    const styleIcon = {
        width: props?.size ? props.size+"px" : "50px",
        height: props?.size ? props.size+"px" : "50px",
        margin:0,
        padding:0,
    }

    const styleP = {
        margin:0,
        padding:0,
    }

    return (
        <>
            <StyledMapCheckpointDiv >
                <div>
                    <FmdGoodIcon style={styleIcon}></FmdGoodIcon>
                    {props?.text ? <p style={styleP}> {props.text} </p> : ""}
                </div>
            </StyledMapCheckpointDiv>
        </>
    )

}