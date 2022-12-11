import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import {Card} from "../Card/Card"
import {Container} from "../Container/Container"
import { Button } from "@mui/material";
import { useState} from "react"
//jinn#4465

export const MenuItem = ({value,isSelected,...props}) => {

    const setIsSelected = () => {
        console.log("option cliquée : " + value)
        return isSelected = true;
    }

    return (
        <nav 
            onClick={setIsSelected}
            className={['menuItem', isSelected? 'isSelected':''].join(' ')}
        style={
            {
                ...{
                    value : value || null,
                },
                ...props?.style
            }
        }>
            {props.children}
        </nav>
        
    )
    
}

MenuItem.propTypes = {
     /**
     * Which color is used for background
     */
      backgroundColor: PropTypes.string,
      /**
     * Which color is used for the text
     */
       color: PropTypes.string,
    /**
     * Which color is used for the border
     */
        borderColor: PropTypes.string,
      /**
      * Which width
      */
     width: PropTypes.string,
     /**
      * Which height
      */
     height: PropTypes.string,
     /**
     * Is rounded ? 
      */
     rounded: PropTypes.bool,
}

MenuItem.defaultProps = {
    backgroundColor: null,
    color : null,
    rounded:false,
    width : "130px",
    height : "40px",
}