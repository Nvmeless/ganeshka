import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import {BsPlusLg} from "react-icons/bs";
import { GiAerodynamicHarpoon } from "react-icons/gi";

const SpeedDialIcon = ({...props}) => {

  return (
      <span className={["speedDialAction",(props?.menuOpen ? "icon-rotate " : "icon-no-rotate"),props?.className].join(" ")}>
          <span className={["icon",(props?.openIcon && props?.menuOpen ? "icon-hide" : "icon-show" )].join(" ")}>
              {props.icon}
          </span>
           <span className={["icon",(props?.openIcon && props?.menuOpen ? "icon-show"  : "icon-hide" )].join(" ")} >
              {
                  props?.openIcon && props?.menuOpen ?  props.openIcon : <></>
              }
           </span>
      </span>

  );
}

SpeedDialIcon.propTypes  = {

  classes: PropTypes.object,
  /**
   * The icon to display.
   */
  icon: PropTypes.node,
  /**
   * @ignore
   * If `true`, the component is shown.
   */
  menuOpen: PropTypes.bool,
  /**
   * @ignore
   * If `true`, the component is shown.
   */
  open: PropTypes.bool,
  /**
   * The icon to display in the SpeedDial Floating Action Button when the SpeedDial is open.
   */
  openIcon: PropTypes.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
};

SpeedDialIcon.defaultProps = {
  open: false,
  icon:<BsPlusLg></BsPlusLg>,
  openIcon:<GiAerodynamicHarpoon></GiAerodynamicHarpoon>,
  classes: null
}


export default SpeedDialIcon;
