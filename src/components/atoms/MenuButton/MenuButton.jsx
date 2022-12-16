import React from "react";
import IconButton from '@mui/material/IconButton';

export const MenuButton = (props) =>  {
    
    const contentHandler = () => {
        return props.action(props.content)
    }
    
    return (
        <IconButton
            onClick={contentHandler}
            size={props.size}
            edge={props.edge}
            color={props.color}
            aria-label={props.label}
            sx={props.sx}
          >
            {props.children}
        </IconButton>
    )
}