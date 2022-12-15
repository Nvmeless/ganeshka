import React from "react";
import PropTypes from 'prop-types';
import {StyledTypography,StyledTitleOne,StyledTitleTwo, StyledTitleThree, StyledTitleFour, StyledTitleFive, StyledTitleSix,StyledWrap,StyledGutterBottom,Styledparagraph} from './styles.js';
import { useTheme,css } from "styled-components";

export const Typography = ({...props}) => {
    const {component,noWrap,gutterBottom,paragraph} = props;


    const theme = useTheme()
    const fontTheme = (keyTheme) => {
        const {font, fontStyle} = theme;
        const selected = fontStyle.find((k) => k.name === keyTheme)
        const {size, color} = selected;
        if(font.primary && !selected.font){
            selected.font = font.primary
        } 
        return css`
            color:${color};
            font-size:${size};
        `;

    }
    if (component === 'h1'){
        return( <StyledTitleOne theme={theme} fontTheme={fontTheme("title")} {...props}></StyledTitleOne>)
    }
    else if (component === 'h2'){
        return( <StyledTitleTwo theme={theme} {...props}></StyledTitleTwo>)
    }
    else if (component === 'h3'){
        return( <StyledTitleThree theme={theme} {...props}></StyledTitleThree>)
    }
    
    else if (component === 'h4'){
        return( <StyledTitleFour theme={theme} {...props}></StyledTitleFour>)
    }
    else if (component === 'h5'){
        return( <StyledTitleFive theme={theme} {...props}></StyledTitleFive>)
    }
    else if (component === 'h6'){
        return( <StyledTitleSix theme={theme} {...props}></StyledTitleSix>)
    }
    if (noWrap === true)
    {
        return( <StyledWrap theme={theme} {...props}></StyledWrap>)
    }
    if (gutterBottom === true)
    {
        return( <StyledGutterBottom theme={theme} {...props}></StyledGutterBottom>)
    }
    
    if (paragraph === true)
    {
        return( <Styledparagraph theme={theme} {...props}></Styledparagraph>)
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