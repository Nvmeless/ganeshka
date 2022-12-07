import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import {AiOutlinePlus} from "react-icons/ai";

const SpeedDialIcon = ({...props}) => {


  return (
      <span className={props?.className}>
        {
          props?.openIcon && props.open ?  props.openIcon : props.icon
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
  icon:<AiOutlinePlus></AiOutlinePlus>,
  openIcon:<AiOutlinePlus></AiOutlinePlus>,
  classes: null
}


export default SpeedDialIcon;
