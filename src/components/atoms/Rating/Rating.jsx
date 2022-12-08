import {React, useState, useRef, useEffect} from "react";
import PropTypes from 'prop-types';
import {StyledRating} from './styles.js';
import {FaStar, FaRegStar} from "react-icons/fa"
import Box from "@mui/material/Box";


export const Rating = ({classes, defaultValue, disabled, emptyIcon, emptyLabelText, getLabelText, highlightSelectedOnly, icon, max, name, onChange, onChangeActive, precision, readOnly, size, value, valueActive, sx}) => {

    ///////////////////////////////////////////////////////////////////
    //                       INIT PROPS                              //
    ///////////////////////////////////////////////////////////////////
    var _max = max || 5;
    var _defaultValue = ((defaultValue > 0 && defaultValue <= _max) && defaultValue) || 0;
    const DynamicEmptyIcon = () => emptyIcon || <FaRegStar fontSize="inherit"/>
    var _highlightSelectedOnly = highlightSelectedOnly || false;
    const DynamicIcon = () => icon || <FaStar fontSize="inherit"  color='#FFBA5A'/>;
    var _precision = precision || 1;
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
    const [labelClass, setLabelClass] = useState("")
    const ratingContainerRef = useRef(null);
    
    ///////////////////////////////////////////////////////////////////
    //                       HOOKS & Functions                       //
    ///////////////////////////////////////////////////////////////////
   
    //Composition de la className root en fonction du prop size
    const handleClassNameRoot = () => {
        var rootClassName = "MuiRating-root";
        if (size && size === "small") {
            rootClassName += " MuiRating-sizeSmall";
                
        } else if (size && size === "large"){
            rootClassName += " MuiRating-sizeLarge";

        } else {
            rootClassName += " MuiRating-sizeMedium";
        }

        if(disabled){
            rootClassName += " Mui-disabled";
        }

        if(readOnly){
            rootClassName += " Mui-readOnly";
        }

        return rootClassName;          

    }

    //Composition de la className Label en fonction de l'existance d'une note ou non
    const handleClassNameLabel = () => {
        if (rate === 0) {
            setLabelClass("MuiRating-labelEmptyValueActive");
        } else {
            setLabelClass("MuiRating-label");
        }
    }

    const calculateNewRating = (precision) => {
        // on récupère les coordonnées du composant rating (sa taille et sa distance par rapport à la gauche)
        const { width, left } = ratingContainerRef.current.getBoundingClientRect();
        // la position de notre curseur dans une icon [en pourcent]
        let mousePosXInIconPercent = (mousePos.x - left) / width;
        // la position de notre curseur dans le container total d'icons [en pourcent]
        const mousePosXInContainerPercent = mousePosXInIconPercent * _max;
        // la note la plus proche de la position de notre sourie
        const nearestRate = Math.round((mousePosXInContainerPercent + precision / 2) / precision) * precision;
        var newRate = Number(nearestRate.toFixed(precision.toString().split(".")[1]?.length || 0))
        
        // on s'assure qu'aucune sortie d'interval ne soit possible
        if (newRate < 0) {
            newRate = 0;
        } else if (newRate > _max){
            newRate = _max;
        }
        // si une fonction getLabelText existe pour traiter l'affichage du label en fonction de la note --> on l'utilise
        // sinon on garde le traitement par défaut
        setLabel(((getLabelText && getLabelText(newRate))|| defaultLabelText(newRate)));
        handleClassNameLabel();
        return (newRate)
    };

    const handleRating = (precision) => {
        setRate(calculateNewRating(precision));
    }

    const handleHover = (precision) => {
        setIsHovered(true)
        setHover(calculateNewRating(precision));
    }

    const handleLeave = () => {
        setIsHovered(false);
        setHover(undefined);
        setLabel(((getLabelText && getLabelText(rate))|| defaultLabelText(rate)))
        handleClassNameLabel()
    }

     // on conserve la position de la sourie lorsqu'elle se déplace
     useEffect(() => {
        if (labelClass === ""){
            handleClassNameLabel();
        }

        // si un traitement est fait sur la note dans App.js on modifie la valeur à chaque modif de la note dans les props
        if (value){
            setRate(value);
        }
        // si un traitement est fait sur la noteActive dans App.js on modifie la valeur à chaque modif de la note dans les props
        if (valueActive){
            setHover(valueActive);
        }

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
    }, [value, valueActive]);

    ///////////////////////////////////////////////////////////////////
    //                       RETURN CONTENT                          //
    ///////////////////////////////////////////////////////////////////

    return(
        <StyledRating  precision={precision} max={_max} sx={sx}>
            <div className={handleClassNameRoot()}>
                <Box ref={ratingContainerRef} className="container-icons-style" sx={{
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

                            // si le props highlightSelectedOnly est utilisé
                            if (_highlightSelectedOnly){
                                return (
                                    <Box key={index} position="relative" className={(!readOnly && !disabled) && "icon-cursor-style"} onClick={() => (!readOnly && !disabled) && handleRating(1)} onMouseOver={() => (!readOnly && !disabled) && handleHover(1)} onMouseLeave={() => (!readOnly && !disabled) && handleLeave()}>
                                        <Box sx={{width: (currentRate === index + 1) ? "100%":"0%"}} className='MuiRating-iconActive'>
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
                                    <Box key={index} position="relative" className={(!readOnly && !disabled) && "icon-cursor-style"} onClick={() =>(!readOnly && !disabled) && ((onChange && onChange(calculateNewRating(_precision)))||handleRating(_precision))} onMouseOver={() => (!readOnly && !disabled) && (((onChangeActive) && onChangeActive(calculateNewRating(_precision))) || handleHover(_precision))} onMouseLeave={() => (!readOnly && !disabled) && handleLeave()}>
                                        <Box sx={{width: showRatingWithPrecision ? `${(currentRate % 1) * 100}%`:"0%"}} className='MuiRating-iconActive'>
                                            <DynamicIcon />
                                        </Box>
                                        <Box>
                                            {showEmptyIcon ? <DynamicEmptyIcon /> :  <DynamicIcon />}
                                        </Box>
                                    </Box>
                                )
                            }
                        }
                    )}
                </Box>
                <Box className={labelClass}>
                    <p>{label}</p>
                </Box>
            </div>
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
