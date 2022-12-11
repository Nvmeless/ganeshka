import React from "react";
import PropTypes from 'prop-types';
import {StyledSlider} from './styles.js';

export const Slider = ({...props}) => {
    const {label, colorUp, colorDown, margin, height, width, min, max, step, vertical, displayInt} = props;


    return( 
        <>
            <label>{props.label}</label>
            {props.displayInt && props.min}
            <StyledSlider type="range" 
            {...props}>
            </StyledSlider>
            {props.displayInt && props.max}
        </>
    )
}

Slider.propTypes ={ 
    /**
     * Which nale
     */
    label: PropTypes.string,
    /**
     * Which color is used for the slider
     */
    colorUp: PropTypes.string,
    /**
     * Which color is used for the slider
     */
    colorDown: PropTypes.string,
    /**
     * Which width
     */
    width: PropTypes.string,
    /**
     * Which height
     */
    height: PropTypes.string,
    /**
     * Which margin
     */
    margin: PropTypes.string,
    /**
     * Which minimum
     */
    min: PropTypes.number,
    /**
     * Which maximum
     */
    max: PropTypes.number,
    /**
     * Which step
     */
    step: PropTypes.number,
    /**
     * Is horizontal
     */
    vertical: PropTypes.bool,
    /**
     * Display the min and max number
     */
    displayInt: PropTypes.bool,
}

Slider.defaultProps = {
    colorUp: "#0000ff",
    colorDown: "#555555",
    height: "10px",
    vertical: false,
    displayInt: false,
}