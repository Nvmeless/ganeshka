import React from "react";
import PropTypes from "prop-types";
import { StyledToolBar } from "./styles.js";

export const ToolBar = ({ ...props }) => {
  return <StyledToolBar as={props.component} {...props}></StyledToolBar>;
};

ToolBar.propTypes = {
  /**
   * Which variant to use
   */
  variant: PropTypes.oneOf(["dense", "regular"]),
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

ToolBar.defaultProps = {
  variant: null,
  disableGutters: false,
  variant: "regular",
  component: "nav",
};
