import React from "react";
import PropTypes from 'prop-types';
import {StyledTypography,StyledTitle} from './styles.js';

export const Typography = ({...props}) => {
    const {component} = props;
    console.log(component,props);
    if (component === 'h1'){
        return( <StyledTitle {...props}></StyledTitle>)
    }

    return( <StyledTypography {...props}></StyledTypography>)
    
}

Typography.propTypes ={ 

    align: PropTypes.oneOf(['center','inherit','justify','left','right']),
 
    children: PropTypes.string,
   
    classes: PropTypes.object,

    component: PropTypes.string,

    gutterBottom: PropTypes.bool,

    noWrap: PropTypes.bool,

    paragraph: PropTypes.bool,

    variant: PropTypes.string,

    variantMapping: PropTypes.object,

}

Typography.defaultProps = {
    align: 'inherit',
    gutterBottom:false,
    noWrap: false,
    paragraph:false,
    variant:'body1',

}