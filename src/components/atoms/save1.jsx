import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import {Card} from "../Card/Card"
import {Container} from "../Container/Container"
import { Button } from "@mui/material";
import { useState} from "react"
//jinn#4465

export const Select = ({backgroundColor,color, width, height,rounded, borderColor, value, label, onChange, ...props}) => {

    const borderRadius = rounded ? 'rounded' : '';

    const [openMenu, setOpenMenu] = useState(false)
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <div 
        onClick={handleOpenMenu}
        className={['select',borderRadius, props?.className].join(' ')} 
        style={
            {
                ...{
                    width : width || null,
                    height : height || null,
                    backgroundColor : backgroundColor || "white", 
                    color : color || "black",
                    borderColor : borderColor || "black",
                    value : value || null,
                    label : label || "Label"
                },
                ...props?.style
            }
        }>
            {openMenu ? 
                (<div class = "label-container" >
                    <div>
                        <div class="label">{label}</div>
                        <div class="down-arrow icon"></div>
                    </div>
                </div>) : 
                (<>
                    <div class = "label-container">
                        <div>
                            <div class="label">{label}</div>
                            <div class="up-arrow icon"></div>
                        </div>
                        
                    </div>
                    <div class="options-menu">
                        <div>
                            {props.children}
                        </div>
                    </div>
                </>
                )}
        </div>
        
    )
    
}

Select.propTypes = {
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
      /**
     * Wich label of Select
      */
      label: PropTypes.string,
}

Select.defaultProps = {
    backgroundColor: null,
    color : null,
    rounded:false,
    width : "130px",
    height : "40px",
    label : "label"
}





-----------------------------------------------------------



.select {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    /* box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px; */
    border-radius: 5px;
    border:1px solid;
}

.label-container{
    display: flex; /* contexte sur le parent */
    flex-direction: column; /* direction d'affichage verticale */
    justify-content: center; /* alignement vertical */
    white-space: nowrap;
}

.select:hover {
    border:1.5px solid;
    cursor: pointer;
}

.down-arrow.icon {
    border-top: solid 7px #333333;
    /* border-bottom: solid 7px #333333; */
    border-left: solid 7px transparent;
    border-right: solid 7px transparent; 
    float: right;
    margin-right: 10px;
    margin-top: 5%;
    width: 0;
}

.up-arrow.icon {
    border-bottom: solid 7px #333333;
    /* border-bottom: solid 7px #333333; */
    border-left: solid 7px transparent;
    border-right: solid 7px transparent; 
    float: right;
    margin-right: 10px;
    margin-top: 5%;
    width: 0;
}
    /* .mirror-vertical-filled.icon:before {
      left: -7px;
      top: 1px;
      width: 15px;
      height: 0;
      border-top: dotted 1px #333333; } */

.label{
    width: 70%;
    float: left;
    margin-left: 10px;
}
  
.options-menu{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    position: absolute;
    top: 40px;
    left: 0;
    background-color: #fff;
    height: 1px;
    width: 1px;
    transition: 0.3s opacity ease-in-out;
    padding: 0;
}