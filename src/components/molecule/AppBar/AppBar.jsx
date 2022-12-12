import React from "react";
import PropTypes from "prop-types";
import { StyledAppBar } from "./styles.js";

export const AppBar = ({ ...props }) => {
  return <StyledAppBar {...props}></StyledAppBar>;
};

AppBar.propTypes = {
  /**
   * Which color is used for background
   */
  color: PropTypes.string,
  /**
   * Which position for the appBar
   */
  position: PropTypes.oneOf([
    "absolute",
    "fixed",
    "relative",
    "static",
    "sticky",
  ]),
  /**
   * Add style for the component
   */
  sx: PropTypes.object,
  /**
   * If true, the color prop is applied in dark mode.
   */
  enableColorOnDark: PropTypes.bool,
};

AppBar.defaultProps = {
  color: null,
  position: "absolute",
  enableColorOnDark: false,
};
