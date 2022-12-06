import {React, useState, useRef, useEffect} from "react";
import PropTypes from 'prop-types';
import {StyledRating} from './styles.js';
import {FaStar, FaRegStar} from "react-icons/fa"
import Box from "@mui/material/Box";


export const Rating = ({classes, defaultValue, disabled, emptyIcon, emptyLabelText, getLabelText, highlightSelectedOnly, icon, max, name, onChange, onChangeActive, precision, readOnly, size, value, sx}) => {

    ///////////////////////////////////////////////////////////////////
    //                       INIT PROPS                              //
    ///////////////////////////////////////////////////////////////////
    var _max = max || 5;
    var _defaultValue = ((defaultValue > 0 && defaultValue <= _max) && defaultValue) || 0;
    var _disabled = disabled || false;
    const DynamicEmptyIcon = () => emptyIcon || <FaRegStar fontSize="inherit"/>
    var _highlightSelectedOnly = highlightSelectedOnly || false;
    const DynamicIcon = () => icon || <FaStar fontSize="inherit"  color='#FFBA5A'/>;
    var _precision = precision || 1;
    var _readOnly = readOnly || false;
    var _value = ((value > 0 && value <= _max) && value) || null;
    var _emptyLabelText = emptyLabelText || 'Empty';
    const defaultLabelText = (value) => { 
        return `${value} Star${value !== 1 ? 's' : ''}`; 
    };

    ///////////////////////////////////////////////////////////////////
    //                       INIT Vars                               //
    ///////////////////////////////////////////////////////////////////

    const [rate, setRate] = useState(_value || _defaultValue)
    const [hover, setHover] = useState(undefined)
    const [label, setLabel] = useState((!value && !defaultValue) ? _emptyLabelText : ((getLabelText && getLabelText)||defaultLabelText(rate)))
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({});
    const ratingContainerRef = useRef(null);
    
    
    ///////////////////////////////////////////////////////////////////
    //                       HOOKS & Functions                       //
    ///////////////////////////////////////////////////////////////////
    // on conserve la position de la sourie lorsqu'elle se déplace
    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    const calculateRating = (precision) => {
        // on récupère les coordonnées du composant rating (sa taille et sa distance par rapport à la gauche)
        const { width, left } = ratingContainerRef.current.getBoundingClientRect();
        // la position de notre curseur dans une icon [en pourcent]
        let mousePosXInIconPercent = (mousePos.x - left) / width;
        // la position de notre curseur dans le container total d'icons [en pourcent]
        const mousePosXInContainerPercent = mousePosXInIconPercent * _max;
        // la note la plus proche de la position de notre sourie
        const nearestRate = Math.round((mousePosXInContainerPercent + precision / 2) / precision) * precision;
        const newRate = Number(nearestRate.toFixed(precision.toString().split(".")[1]?.length || 0))
        setLabel(((getLabelText && getLabelText)|| defaultLabelText(newRate)));
        return (newRate)
    };

    const HandleRating = (precision) => {
        setRate(calculateRating(precision));
    }

    const HandleHover = (precision) => {
        setIsHovered(true)
        setHover(calculateRating(precision));
    }

    const HandleLeave = () => {
        setIsHovered(false);
        setHover(undefined);
        setLabel(((getLabelText && getLabelText)|| defaultLabelText(rate)))

    }

    ///////////////////////////////////////////////////////////////////
    //                       RETURN CONTENT                          //
    ///////////////////////////////////////////////////////////////////

    return(
        <StyledRating className={classes} size={size} precision={precision} max={_max} sx={sx}>
            <Box ref={ratingContainerRef} sx={{
                display: "inline-flex",
                position: "relative",
                textAlign: "left",
            }}>
                {
                    // Pour chaque étoiles
                    [...new Array(_max)].map((_, index) => {
                        //si une icone est  survolée alors la valeurs de la note = valeur survolée
                        //sinon note = valeur sélectionné précédement ou par défaut
                        const currentRate = isHovered ? hover : rate;
                        // si la note actuelle n'est pas valable ou qu'elle est plus petite que l'icone 
                        // courant --> afficher une icone vide
                        const showEmptyIcon = currentRate <= 0 || currentRate < index + 1;
                        // si la note actuelle n'est pas égale à l'index de l'icone courant --> afficher une icone vide
                        const isActiveRating = currentRate !== 1;
                        const isRatingWithPrecision = currentRate % 1 !== 0;
                        // si la note est égale à l'index supérieur le plus proche --> true
                        const isRatingEqualToIndex = Math.ceil(currentRate) === index + 1;
                        // si toutes les conditions précédentes sont respectées --> true
                        const showRatingWithPrecision =
                        isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;

                        // si le props disabled est utilisé
                        if (_disabled){
                            // si le props highlightSelectedOnly est utilisé
                            if (_highlightSelectedOnly){
                                return (
                                    <Box key={index} position="relative" className="star-disabled-highlight-style">
                                        <Box sx={{width: (currentRate === index + 1) ? "100%":"0%"}} className='active-star-style'>
                                            <DynamicIcon />
                                        </Box>
                                        <Box>
                                            <DynamicEmptyIcon />
                                        </Box>
                                    </Box>
                                )
                            // le props highlightSelectedOnly n'est pas utilisé
                            } else {
                                return (
                                    <Box key={index} position="relative">
                                        <Box sx={{width: showRatingWithPrecision ? `${(rate % 1) * 100}%`:"0%"}} className="star-disabled-style active-star-style">
                                            <DynamicIcon  />
                                        </Box>
                                        <Box className="star-disabled-style">
                                            {showEmptyIcon ? <DynamicEmptyIcon /> :  <DynamicIcon />}
                                        </Box>
                                    </Box>
                                    
                                )
                            }
                        } else {
                            // si le readOnly est utilisé
                            if (_readOnly) {
                                // si le props highlightSelectedOnly est utilisé
                                if (_highlightSelectedOnly){
                                    return (
                                        <Box key={index} position="relative" className="star-readOnly-highlight-style">
                                            <Box sx={{width: (currentRate === index + 1) ? "100%":"0%"}} className='active-star-style'>
                                                <DynamicIcon />
                                            </Box>
                                            <Box>
                                                <DynamicEmptyIcon />
                                            </Box>
                                        </Box>
                                    )
                                // le props highlightSelectedOnly n'est pas utilisé
                                } else {
                                    return (
                                        <Box key={index} position="relative" >
                                            <Box sx={{width: showRatingWithPrecision ? `${(rate % 1) * 100}%`:"0%"}} className='active-star-style'>
                                                <DynamicIcon />
                                            </Box>
                                            <Box>
                                                {showEmptyIcon ? <DynamicEmptyIcon /> :  <DynamicIcon />}
                                            </Box>
                                        </Box>
                                    )
                                }
                            } else {
                                // si le props highlightSelectedOnly est utilisé
                                if (_highlightSelectedOnly){
                                    return (
                                        <Box key={index} position="relative" className="star-highlight-style icon-cursor-style" onClick={() => HandleRating(1)} onMouseOver={() => HandleHover(1)} onMouseLeave={() => HandleLeave()}>
                                            <Box sx={{width: (currentRate === index + 1) ? "100%":"0%"}} className='active-star-style'>
                                                <DynamicIcon />
                                            </Box>
                                            <Box>
                                                <DynamicEmptyIcon />
                                            </Box>
                                        </Box>
                                    )
                                // le props highlightSelectedOnly n'est pas utilisé
                                } else {
                                    return (
                                        <Box key={index} position="relative" className="icon-cursor-style" onClick={() =>(((onChange) && onChange) || HandleRating(_precision))} onMouseOver={() => (((onChangeActive) && onChangeActive) || HandleHover(_precision))} onMouseLeave={() => HandleLeave()}>
                                            <Box sx={{width: showRatingWithPrecision ? `${(currentRate % 1) * 100}%`:"0%"}} className='active-star-style'>
                                                <DynamicIcon />
                                            </Box>
                                            <Box>
                                                {showEmptyIcon ? <DynamicEmptyIcon /> :  <DynamicIcon />}
                                            </Box>
                                        </Box>
                                    )
                                }
                            }
                        }
                    }
                )}
            </Box>
            <Box className="MuiRating-label">
                <p>{label}</p>
            </Box>
        </StyledRating>
    )     
}

///////////////////////////////////////////////////////////////////
//                         PROPTYPES                             //
///////////////////////////////////////////////////////////////////

Rating.propTypes ={ 
    /**
     * Which dafault value
     */
    classes: PropTypes.object,
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
