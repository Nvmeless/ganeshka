import React from "react";
import PropTypes from 'prop-types';
import {StyledDrawer} from './styles.js';

export const Drawer = ({...props}) => {
    return( <StyledDrawer {...props}></StyledDrawer>)
}

Drawer.propTypes ={
    /**
     * Which color is used for background
     */
    backgroundColor: PropTypes.string,
    /**
     * Which width
     */
    width: PropTypes.string,
    /**
     * Which height
     */
    height: PropTypes.string,
    /**
     * Add style for the component
     */
    loading: PropTypes.bool,
}

Drawer.defaultProps = {
    backgroundColor: 'white',
    width: '300px',
    height:'150vh',
    loading: false,
}
  