// @inheritedComponent Tooltip
import * as React from 'react';
import PropTypes from 'prop-types';
import { ImFilesEmpty } from "react-icons/im";

import {Tooltip} from "@mui/material";
import {Fab} from "@mui/material";
import './styles.css'




const SpeedDialAction = (props) => {

    return (
        <div className={props?.classes}  id={props?.id ? props.id : null}>
          <Tooltip
              title={props?.tooltipTitle ? props.tooltipTitle : "" }
              classes={props?.TooltipClasses}
              placement={props?.tooltipPlacement}
              open={props.tooltipOpen}>
          <Fab {...props?.FabProps} >
            {props.icon}
          </Fab>
        </Tooltip>
        </div>)
}

SpeedDialAction.propTypes  = {

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * Adds a transition delay, to allow a series of SpeedDialActions to be animated.
   * @default 0
   */
  delay: PropTypes.number,
  /**
   * Props applied to the [`Fab`](/material-ui/api/fab/) component.
   * @default {}
   */
  FabProps: PropTypes.object,
  /**
   * The icon to display in the SpeedDial Fab.
   */
  icon: PropTypes.node,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: PropTypes.string,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
  /**
   * `classes` prop applied to the [`Tooltip`](/material-ui/api/tooltip/) element.
   */
  TooltipClasses: PropTypes.object,
  /**
   * Make the tooltip always visible when the SpeedDial is open.
   * @default false
   */
  tooltipOpen: PropTypes.bool,
  /**
   * Placement of the tooltip.
   * @default 'left'
   */
  tooltipPlacement: PropTypes.oneOf([
    'bottom-end',
    'bottom-start',
    'bottom',
    'left-end',
    'left-start',
    'left',
    'right-end',
    'right-start',
    'right',
    'top-end',
    'top-start',
    'top',
  ]),
  /**
   * Label to display in the tooltip.
   */
  tooltipTitle: PropTypes.node,
};

SpeedDialAction.defaultProps = {
  FabProps: { size:"small"},
  icon:<ImFilesEmpty></ImFilesEmpty>
}

export default SpeedDialAction;
