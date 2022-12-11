import React from "react";
import {StyledTitle} from './style.js';
import PropTypes from 'prop-types'

export const Title = ({...props}) => {

    const{backgroundColor, size} = props;

    return (
        <>
            <h2>{ props.title }</h2>

        </>
    )
}

Title.propTypes = {
    backgroundColor : PropTypes.string,
    size            : PropTypes.number 
}
