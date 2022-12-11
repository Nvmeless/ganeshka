import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import {BsPlusLg} from "react-icons/bs";
import { GiAerodynamicHarpoon } from "react-icons/gi";
import {StyledSpan} from './styles.js';
const SpeedDialIcon = ({...props}) => {


    return (
        <StyledSpan className={["speedDialAction",
            (props.open ? "speedDialAction-component-visible" : "speedDialAction-component-hidden"),
            (props?.menuOpen ? "icon-rotate " : "icon-no-rotate"),
            props?.className].join(" ")}
        style={{...props.sx}}>
          <span className={["icon",(props?.openIcon && props?.menuOpen ? "icon-hide" : "icon-show" )].join(" ")}>
              {props.icon}
          </span>
           <span className={["icon",(props?.openIcon && props?.menuOpen ? "icon-show"  : "icon-hide" )].join(" ")} >
              {
                props?.openIcon && props?.menuOpen ?  props.openIcon : <></>
              }
           </span>
      </StyledSpan> );
}

SpeedDialIcon.propTypes  = {
    /* rejoute des classe sur le speedDialIcon */
  classes: PropTypes.object,
    /* icon qui est de base sur le speedDialIcon */
  icon: PropTypes.node,
    /* propriété qui permet de savoir si le menu est ouvert ou non */
  menuOpen: PropTypes.bool,
    /* si a true alors le composant s'affiche */
  open: PropTypes.bool,
    /* icon qui s'affiche lorsque le speedial est ouvert */
  openIcon: PropTypes.node,
    /* sx etends le style pour le speedDialIcon */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
    /* Aria label envoyé du parent pour fomer les ids */
    ariaLabel: PropTypes.string,
};

SpeedDialIcon.defaultProps = {
  open: true,
  icon:<BsPlusLg></BsPlusLg>,
  openIcon:<GiAerodynamicHarpoon></GiAerodynamicHarpoon>,
  sx:{},
  menuOpen:false,
  classes:{},
  ariaLabel:null
}


SpeedDialIcon.displayName = 'SpeedDialIcon';
export default SpeedDialIcon;
