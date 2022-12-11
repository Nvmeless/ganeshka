import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import {Card} from "../Card/Card"
import {Container} from "../Container/Container"
import { Button } from "@mui/material";
import { useState} from "react"
//jinn#4465

export const Select = ({backgroundColor,color,rounded, borderColor, value, label, onChange, ...props}) => {

    const borderRadius = rounded ? 'rounded' : '';

    const [openMenu, setOpenMenu] = useState(false)
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <div 
        className={['select',borderRadius, props?.className].join(' ')} 
        style={
            {
                ...{
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
                (
                    <>
                    <div class = "label-container" onClick={handleOpenMenu}>
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
                ) : 
                (<>
                    <div class="select__label" onclick={handleOpenMenu}>
                        Choisir
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
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
    label : "label"
}

------------------------------------------------------

.select {
    position: relative;
}

.select__label {
    border: 1px solid #1e293b;
    padding: 5px 12px;
    display: inline-flex;
    align-items: center;
    border-radius: 4px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: 0.3s background-color ease-in-out;
    color: #1e293b;
    font-family: 'Arial';
    font-size: 14px;
}

.select__label:hover {
    background-color: #f1f5f9;
}

.select__label svg {
    stroke: #1e293b;
    width: 18px;
    height: 18px;
    margin-left: 8px;
    transition: 0.3s transform ease-in-out;
}

.select.active .select__label svg {
    transform: rotate(180deg);
}

.select__content {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    position: absolute;
    top: 40px;
    left: 0;
    opacity: 0;
    background-color: #fff;
    height: 1px;
    width: 1px;
    overflow: hidden;
    transition: 0.3s opacity ease-in-out;
    padding: 0;
}

.select.active .select__content {
    opacity: 1;
    padding: 20px;
    width: 300px;
    height: auto;
}

.select__content__field {
    margin-bottom: 10px;margin-top: 10px;
    display: block;
    color: #1e293b;
    font-family: 'Arial';
    font-size: 14px;
}


.select__content__field:last-of-type {
    margin-bottom: initial;
}

.select__content__field input {
    display: none;
}

.select__content__field label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    font-family: 'Arial';
    font-size: 14px;
}

.select__content__field:hover label {
    color: #374151;
}


.select__content__field:hover label:before {
    background-color: #f3f4f6;
}


.select__content__field label:before {
    content: '';
    height: 16px;
    width: 16px;
    border-radius: 5px;
    border: 1px solid #1e293b;
    position: absolute;
    top: -1px;
    left: 0px;
    cursor: pointer;
}

.select__content__field input:checked+label:after {
    content: '';
    height: 12px;
    width: 12px;
    border-radius: 5px;
    background-color: #4d7c0f;
    position: absolute;
    top: 2px;
    left: 3px;
    cursor: pointer;
}

.select__content__field__text {
    margin-top: 10px;
    display: block;
    color: #1e293b;
    font-family: 'Arial';
    font-size: 14px;
    display: none;
}

.select__content__field__text.active {
    display: block;
}


.select__content__field__text input {
    border: 1px solid #1e293b;
    padding: 5px 12px;
    display: inline-flex;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s background-color ease-in-out;
    color: #1e293b;
    font-family: 'Arial';
    font-size: 14px;
    margin-top: 6px;
}