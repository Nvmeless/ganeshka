import React from "react";
import PropTypes from 'prop-types';
import './style.css';

export const Card = ({backgroundColor,shadow,rounded, height, width,...props}) => {
    
    const borderRadius = rounded ? 'rounded' : '';
    const shadowClass = shadow ? `shadow--${shadow}` : `shadow--1`
    console.log(Array.apply(null, Array(themesLengthShadow)).map((x, i) => {return i;}))
    return (
        <div className={['card',shadowClass, borderRadius, props?.className].join(' ')} 
        style={
            {
                ...{
                    width : width || null,
                    height : height || null,
                    backgroundColor : backgroundColor || "white"
                },
                ...props?.style
            }
        }>
            {props.children}
        </div>
    )
}

const themesLengthShadow = 41;
Card.propTypes ={ 
    /**
     * Which color is used for background
     */
    backgroundColor: PropTypes.string,
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
    * Which type of shadow ? 
     */
     shadow: PropTypes.oneOf(Array.apply(null, Array(themesLengthShadow)).map((x, i) => {return x;}))

}

Card.defaultProps = {
    backgroundColor: null,
    rounded:false,
    shadow: 1
}