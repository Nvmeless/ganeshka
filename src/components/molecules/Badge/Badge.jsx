import React from "react";
import PropTypes from 'prop-types';
import './style.css';

export const Badge = ({badgeContent, badgeBackground, backgroundColor, rounded, height, width, ...props}) => {

  const borderRadius = rounded ? 'rounded' : '';
  let badgeBackgroundColor = null;
  if (badgeBackground) {
    badgeBackgroundColor = badgeBackground.includes("Primary") ? "blue" 
    : badgeBackground.includes("Secondary") ? "purple" 
    : badgeBackground.includes("Success") ? "green"
    : badgeBackground.includes("Danger") ? "red"
    : badgeBackground
  }
  return (
        <div className={['badge',borderRadius, props?.className].join(' ')} 
        style={
            {
                ...{
                    width : width || "50px",
                    height : height || "50px",
                    backgroundColor : backgroundColor || "white"
                },
                ...props?.style
            }
        }>
            {
                <>
                    {props.children}
                    {badgeContent ? 
                    <div className="rounded notification"
                    style={
                        {
                            ...{
                                width : width * 0.5 +"px" || "25px",
                                height : height * 0.5 + "px" || "25px",
                                backgroundColor : badgeBackgroundColor || "blue",
                                fontSize: width * 0.3 + "px" || "15px"
                            }
                        }
                    }
                    >
                        {badgeContent}
                    </div> 
                    : <></>}
                </>
            }
        </div>
    )
}

Badge.propTypes = { 
    /**
     * Which color is used for background
     */
    backgroundColor: PropTypes.string,
    /**
     * Which width
     */
    width: PropTypes.number,
    /**
     * Which height
     */
    height: PropTypes.number,
    /**
     * Is rounded ? 
     */
    rounded: PropTypes.bool,
    /**
     * Which number is displayed in badge
     */
    badgeContent: PropTypes.number,
    /**
     * Which color is used for badge background
     */
    badgeBackground : PropTypes.string

}

Badge.defaultProps = {
    backgroundColor: null,
    badgeContent: null,
    badgeBackground: null,
    rounded: false,
    width: "50px",
    height: "50px",
    iconColor: "black"
}

/*
Exemple :

<Badge backgroundColor={"#00ff00"} rounded={true} badgeContent={2} width={50} height={50}>
    <Icon icon={"Bs/BsFillAlarmFill"} size={50} color={"black"} />
</Badge>
*/