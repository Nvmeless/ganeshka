import React from "react";
import PropTypes from 'prop-types';
import {StyledContainer} from './styles.js';

export const Container = ({...props}) => {

    const {backgroundColor, margin, padding, direction} = props;


    return( <StyledContainer {...props}></StyledContainer>)
}

Container.propTypes = { 

    backgroundColor: PropTypes.string,

    width: PropTypes.string,

    height: PropTypes.string,

    rounded: PropTypes.bool,

    direction: PropTypes.string

}

Container.defaultProps = {
    backgroundColor: null,
    rounded:false,
    shadow: 1
}