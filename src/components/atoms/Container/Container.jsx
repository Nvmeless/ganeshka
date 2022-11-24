import React from "react";
import PropTypes from 'prop-types';
import {StyledContainer} from './styles.js';

export const Container = ({...props}) => {
    const {backgroundColor, margin, padding} = props;


    return( <StyledContainer {...props}></StyledContainer>)
    // return (
    //     <div className={['container', props?.className].join(" ")}  style={
    //         {
    //             ...{
    //                 backgroundColor: backgroundColor || 'transparent',
    //                 padding: padding || '0px',
    //                 margin: margin || '0px',
    //             },
    //             ...props?.style
    //         }
    //     }>
    //         {props.children}
    //     </div>
    //     )
}

Container.propTypes ={ 
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
    * Is rounded ? 
     */
    rounded: PropTypes.bool,

}

Container.defaultProps = {
    backgroundColor: null,
    rounded:false,
    shadow: 1
}