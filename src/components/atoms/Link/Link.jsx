import React from "react";
import PropTypes from "prop-types";
import { StyledLink } from "./styles.js";

export const Link = ({ ...props }) => {
  return <StyledLink as={props.component} {...props}></StyledLink>;
};

Link.propTypes = {
    /**
     * Which variant to use
     */
    variant: PropTypes.oneOf(["body1", "body2","button","caption","h1","h2","h3","h4","h5","h6","inherit","overline","subtitle1","subtitle2"]),
    
    underline: PropTypes.oneOf(["always", "hover","none"]),	
  
    /**
     * Add style for the component
     */
    sx: PropTypes.object,
    /**
     * The component to use for the root node
     */
    component: PropTypes.elementType,
  };
  
  Link.defaultProps = {
    variant: null,
    underline: "always"
  
  };