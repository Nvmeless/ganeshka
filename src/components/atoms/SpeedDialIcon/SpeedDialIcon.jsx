import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import {BsPlusLg} from "react-icons/bs";
import { GiAerodynamicHarpoon } from "react-icons/gi";

const SpeedDialIcon = ({...props}) => {
  const updateIconWithProps = React.Children.map(
      props.icon,
      (child, i) => {
        const animation = (props?.menuOpen ? "transition-out" : "transition-in")
        return React.cloneElement(child, {
          style: {"animation": animation}
        });
      }
  );

  const updateOpenIconWithProps = React.Children.map(
      props.openIcon,
      (child, i) => {
        const animation = (props?.menuOpen ? "transition-in" : "transition-out")
        return React.cloneElement(child, {
          style: {"animation": animation}
        });
      }
  );
  return (
      <span className={["speedDialAction",props?.className].join(" ")}>
        {
          props?.openIcon && props?.menuOpen ?  updateOpenIconWithProps : updateIconWithProps
        }
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
