import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import { useState} from "react"
export const Select = ({backgroundColor,color, width, height,rounded, value, label, onChange, ...props}) => {

    const borderRadius = rounded ? 'rounded' : '';

    const [openMenu, setOpenMenu] = useState(false);
    const [selectedValue, setSelecteValue] = useState(null);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

    const handleSelectItem = (valueItem) => {
        setSelecteValue(valueItem)
    }

    value = props.children.value;

    const setLabel = () => {
        return label;
      };

    return (
        <div 
        className={['select',borderRadius, props?.className].join(' ')} 
        style={
            {
                ...{
                    width : width || null,
                    height : height || null,
                    backgroundColor : backgroundColor || "white", 
                    color : color || "black",
                    value : value || null,
                    label : label || "Label"
                },
                ...props?.style
            }
        }>
            {openMenu ? 
                (<>
                    
                    <div class = "label-container" onClick={handleOpenMenu}>
                    <div class="legend">Age</div>
                            <div class="label"></div>
                            <div class="up-arrow icon"></div>
                        
                    </div>
                    <div class="options-menu">
                        <div >
                            {props.children}
                        </div>
                    </div>
                </>
                
                ) : 
                (selectedValue?
                    (<>
                        <div class = "label-container" onClick={handleOpenMenu}>
                            <div class="legend">Age</div>
                            <div class="label">{label}</div>
                            <div class="down-arrow icon"></div>
                        </div>
                    </>) : 
                    (<>
                    <div class = "label-container" onClick={handleOpenMenu}>
                        <div class="label">{label}</div>
                        <div class="down-arrow icon"></div>
                    </div>
                    </>)
                
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
    label : "Choisir...",
    value : null
}