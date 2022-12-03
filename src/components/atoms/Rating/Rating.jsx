import {React, useState} from "react";
import PropTypes from 'prop-types';
import {StyledRating} from './styles.js';
import {FaStar, FaRegStar} from "react-icons/fa"


export const Rating = ({defaultValue, disabled, emptyIcon, emptyLabelText, getLabelText, highlightSelectedOnly, icon, IconContainerComponent, max, name, _onChange, onChangeActive, precision, readOnly, size, value}) => {
    // Pour le moment inutilisable (err)
    //     Rating.defaultProps = {
    //         defaultValue: 0,
    //         disabled: false,
    //         emptyLabelText: 'Empty',
    //         getLabelText: function defaultLabelText(value) { return `${value} Star${value !== 1 ? 's' : ''}`; },
    //         highlightSelectedOnly: false,
    //         max: 5,
    //         name: "rating-part",
    //         precision: 1,
    //         readOnly: false,
    //         size: 'medium',
    //         value: null
    //    }
    var _defaultValue = defaultValue || 0;
    var _disabled = disabled || false;
    const DynamicEmptyIcon = () => emptyIcon || <FaRegStar fontSize="inherit"/>
    //var _emptyLabelText = emptyLabelText || 'Empty';
    //var _getLabelText = getLabelText || function defaultLabelText(value) { return `${value} Star${value !== 1 ? 's' : ''}`; };
    var _highlightSelectedOnly = highlightSelectedOnly || false;
    const DynamicIcon = () => icon || <FaStar fontSize="inherit"  color='#FFBA5A'/>;
    var _max = max || 5;
    //var _name = name || "rating-part";
    var _precision = precision || 1;
    var _readOnly = readOnly || false;
    var _value = value || null;


    const [rate, setRate] = useState(_value || _defaultValue)
    const [hover, setHover] = useState(undefined)
    var icons = Array(_max).fill(0)

    const HandleRating = (rateValue) => {
        console.log(rateValue + " --> " + widthIconContainer(rateValue));
        setRate(rateValue);
    }

    const HandleHover = (hoverValue) => {
        setHover(hoverValue);
    }

    const HandleLeave = () => {
        setHover(undefined);
    }

    // permet de calculer la taille du container d'icon
    const widthIconContainer = (rateValue) => {
        return (rateValue * 100) / _max
    }
    
    // permet d'afficher unique la selection
    const ShowHighLightIcon = (index) => {
        console.log(index)
        if ((hover || rate) === index){
            return (
                <DynamicIcon  />
            )
        } else {
            return (
                <DynamicEmptyIcon  />
            )
        }
    }

    return(
        <StyledRating size={size} precision={precision} max={_max}>
            {
                // Pour chaque étoiles
                icons.map((_, index) => {
                    // si le props disabled est utilisé
                    if (_disabled){
                        // si le props highlightSelectedOnly est utilisé
                        if (_highlightSelectedOnly){
                            return (
                                <span className="star-disabled-highlight-style" key={index}>
                                    {ShowHighLightIcon(index+1)}
                                </span>
                            )
                        // le props highlightSelectedOnly n'est pas utilisé
                        } else {
                            return (
                                <span key={index}>
                                    <span className="star-disabled-style active-star-style">
                                        <DynamicIcon  />
                                    </span>
                                    <span className="star-disabled-style"><DynamicEmptyIcon /></span>
                                </span>
                                
                            )
                        }
                    } else {
                        // si le readOnly est utilisé
                        if (_readOnly) {
                            // si le props highlightSelectedOnly est utilisé
                            if (_highlightSelectedOnly){
                                return (
                                    <span className="star-readOnly-highlight-style" key={index}>
                                        {ShowHighLightIcon(index+1)}
                                    </span>
                                )
                            // le props highlightSelectedOnly n'est pas utilisé
                            } else {
                                return (
                                    <span key={index}>
                                        <span className="star-readOnly-style active-star-style">
                                            <DynamicIcon  />
                                        </span>
                                        <span className="star-readOnly-style">
                                            <DynamicEmptyIcon  />
                                        </span>
                                    </span>
                                )
                            }
                        } else {
                            // si le props highlightSelectedOnly est utilisé
                            if (_highlightSelectedOnly){
                                return (
                                    <span className="star-highlight-style icon-cursor-style" key={index} onClick={() => HandleRating(index+1)} onMouseOver={() => HandleHover(index+1)} onMouseLeave={() => HandleLeave()}>
                                        {ShowHighLightIcon(index+1)}
                                    </span>
                                )
                            // le props highlightSelectedOnly n'est pas utilisé
                            } else {
                                return (
                                    <span className="icon-cursor-style" key={index} onClick={() => HandleRating(index+1)} onMouseOver={() => HandleHover(index+1)} onMouseLeave={() => HandleLeave()}>
                                        <span className="basic-star-style active-star-style" > {/*ajouter --> style={{width: index+1 <= rate ? "100%" : "0%"}} <-- err*/}
                                            <DynamicIcon />
                                        </span>
                                        <span className="basic-star-style star-container"><DynamicEmptyIcon  /></span>
                                    </span>
                                )
                            }
                        }
                    }
                }
            )}
        </StyledRating>
    )     
}

Rating.propTypes ={ 
    /**
     * Which dafault value
     */
    defaultValue: PropTypes.number,
    /**
     * Is Rating disabled ?
     */
    disabled: PropTypes.bool,
    /**
     * The icon to display when empty.
     */
    emptyIcon: PropTypes.node,
     /**
     * The label read when the rating input is empty.
     */
    emptyLabelText: PropTypes.node,
    /**
     * Which size
     */
    getLabelText: PropTypes.func,
     /**
     * only the selected icon will be highlighted ?
     */
    highlightSelectedOnly: PropTypes.bool,
    /**
     * The icon to display
     */
    icon: PropTypes.node,
     /**
     * The component containing the icon.
     */
    IconContainerComponent: PropTypes.elementType,
     /**
     * Which max rating
     */
    max: PropTypes.number,
    /**
     * Which name attribute of the radio input elements.
     */
    name: PropTypes.string,
     /**
     * Which function to execute when value change
     */
    onChange: PropTypes.func,
    /**
     * Which function to execute when hover value change
     */
    onChangeActive: PropTypes.func,
     /**
     * Wich minimum increment value change allowed ?
     */
    precision: PropTypes.number,
    /**
     * Is rating on ReadOnly
     */
    readOnly: PropTypes.bool,
     /**
     * Which size for icons
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Which value for rating
     */
    value: PropTypes.number


}
