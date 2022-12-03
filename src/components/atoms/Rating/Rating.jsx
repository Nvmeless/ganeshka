import {React, useState} from "react";
import PropTypes from 'prop-types';
import {StyledRating} from './styles.js';
import {FaStar, FaRegStar} from "react-icons/fa"


export const Rating = ({defaultValue, disabled, emptyIcon, emptyLabelText, getLabelText, highlightSelectedOnly, icon, max, name, _onChange, onChangeActive, precision, readOnly, size, sx, value}) => {
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
    var _emptyIcon = () => emptyIcon || <FaRegStar fontSize="inherit"/>
    var _emptyLabelText = emptyLabelText || 'Empty';
    var _getLabelText = getLabelText || function defaultLabelText(value) { return `${value} Star${value !== 1 ? 's' : ''}`; };
    var _highlightSelectedOnly = highlightSelectedOnly || false;
    var _icon = () => icon || <FaStar fontSize="inherit"  color='#FFBA5A'/>;
    var _max = max || 5;
    var _name = name || "rating-part";
    var _precision = precision || 1;
    var _readOnly = readOnly || false;
    var _value = value || null;


    const [rate, setRate] = useState(_value || _defaultValue)
    const [hover, setHover] = useState(undefined)
    var stars = Array(_max).fill(0)

    const HandleRating = (rateValue) => {
        setRate(rateValue);
    }

    const HandleHover = (hoverValue) => {
        setHover(hoverValue);
    }

    const HandleLeave = () => {
        setHover(undefined);
    }

    const ShowStar = (index) => {
        if ((hover || rate) > index){
            return (
                <_icon  />
            )
        } else {
            return (
                <_emptyIcon  />
            )
        }
    }

    const ShowHighLightStar = (index) => {
        if ((hover || rate) === index){
            return (
                <_icon  />
            )
        } else {
            return (
                <_emptyIcon  />
            )
        }
    }

    return(
        <StyledRating size={size} >
            {stars.map((_, index) => {
                if (_disabled){
                    if (_highlightSelectedOnly){
                        return (
                            <div className="star-disabled-highlight-style" key={index}>
                                {ShowHighLightStar(index+1)}
                            </div>
                        )
                    } else {
                        return (
                            <div className="star-disabled-style" key={index}>
                                {ShowStar(index)}
                            </div>
                        )
                    }
                } else {
                    if (_readOnly) {
                        if (_highlightSelectedOnly){
                            return (
                                <div className="star-readOnly-highlight-style" key={index}>
                                    {ShowHighLightStar(index+1)}
                                </div>
                            )
                        } else {
                            return (
                                <div className="star-readOnly-style" key={index}>
                                    {ShowStar(index)}  
                                </div>
                            )
                        }
                    } else {
                        if (_highlightSelectedOnly){
                            return (
                                <div className="star-highlight-style" key={index} onClick={() => HandleRating(index+1)} onMouseOver={() => HandleHover(index+1)} onMouseLeave={() => HandleLeave()}>
                                    {ShowHighLightStar(index+1)}
                                </div>
                            )
                        } else {
                            return (
                                <div className="star-style" key={index} onClick={() => HandleRating(index+1)} onMouseOver={() => HandleHover(index+1)} onMouseLeave={() => HandleLeave()}>
                                    {ShowStar(index)}
                                </div>
                            )
                        }
                    }
                }
                
            })}
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
    emptyIcon: PropTypes.element,
     /**
     * The label read when the rating input is empty.
     */
    emptyLabelText: PropTypes.string,
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
    icon: PropTypes.element,
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
