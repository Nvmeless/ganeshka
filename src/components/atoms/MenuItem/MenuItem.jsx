import React from "react";
import PropTypes from 'prop-types';
import './style.css';

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
      * Which value of option
      */
     value: PropTypes.string,
     /**
     * Is selected option ? 
      */
     isSelected: PropTypes.bool,
}

MenuItem.defaultProps = {
    backgroundColor: null,
    color : null,
    rounded:false,
    width : "130px",
    height : "40px",
}