import React from "react";
import PropTypes from "prop-types";
import './styles.css';
import { StyledDivider } from "./styles.js";

export const Divider = ({ ...props }) => {
  return <StyledDivider as={props.component} {...props}></StyledDivider>;
};

Divider.propTypes = {
  /**
   * Which variant to use
   */
  variant: PropTypes.oneOf(["fullWidth", "inset","middle"]),
  /**
   * orientation
   */

  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
   /**
   * Disable gutter padding
   */

  disableGutters: PropTypes.bool,
  /**
   * Add style for the component
   */
  sx: PropTypes.object,
  /**
   * The component to use for the root node
   */
  component: PropTypes.elementType,
};

Divider.defaultProps = {
  variant: null,
  disableGutters: false,
  variant: "fullWidth",
  orientation:"horizontal"
  
};
