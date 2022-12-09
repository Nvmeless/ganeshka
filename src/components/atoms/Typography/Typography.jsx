import React from "react";
import PropTypes from 'prop-types';
import {StyledTypography,StyledTitleOne,StyledTitleTwo, StyledTitleThree, StyledTitleFour, StyledTitleFive, StyledTitleSix,StyledWrap,StyledGutterBottom,Styledparagraph} from './styles.js';

export const Typography = ({...props}) => {
    const {component,noWrap,gutterBottom,paragraph} = props;
    if (component === 'h1'){
        return( <StyledTitleOne {...props}></StyledTitleOne>)
    }
    else if (component === 'h2'){
        return( <StyledTitleTwo {...props}></StyledTitleTwo>)
    }
    else if (component === 'h3'){
        return( <StyledTitleThree {...props}></StyledTitleThree>)
    }
    else if (component === 'h4'){
        return( <StyledTitleFour {...props}></StyledTitleFour>)
    }
    else if (component === 'h5'){
        return( <StyledTitleFive {...props}></StyledTitleFive>)
    }
    else if (component === 'h6'){
        return( <StyledTitleSix {...props}></StyledTitleSix>)
    }
    if (noWrap === true)
    {
        return( <StyledWrap {...props}></StyledWrap>)
    }
    if (gutterBottom === true)
    {
        return( <StyledGutterBottom {...props}></StyledGutterBottom>)
    }
    
    if (paragraph === true)
    {
        return( <Styledparagraph {...props}></Styledparagraph>)
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