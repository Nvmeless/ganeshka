import styled, {css} from "styled-components";

export const StyledTypography = styled.p`
     background-color:${props => props?.backgroundColor && props.backgroundColor}; 

    text-align:${(props) => { if (props.align) {
        return props.align;
    }
return 'inherit';
}};
    
    ${props => props?.padding && css`
    padding: ${props.padding};
    `}
    ${props => props?.margin && css`
    margin: ${props.margin};
    `}

    height:50vh;
`

export const StyledTitleOne = styled.h1`
    background-color:${props => props?.backgroundColor && props.backgroundColor};

    text-align:${(props) => { if (props.align) {
        return props.align;
    }
return 'inherit';
}};
    
    ${props => props?.padding && css`
    padding: ${props.padding};
    `}
    ${props => props?.margin && css`
    margin: ${props.margin};
    `}

    height:50vh;
    ${props => props.fontTheme}
    
`

export const StyledTitleTwo = styled.h2`
    background-color:${props => props?.backgroundColor && props.backgroundColor};

    text-align:${(props) => { if (props.align) {
        return props.align;
    }
return 'inherit';
}};
    
    ${props => props?.padding && css`
    padding: ${props.padding};
    `}
    ${props => props?.margin && css`
    margin: ${props.margin};
    `}

    height:50vh;

    
`

export const StyledTitleThree = styled.h3`
    background-color:${props => props?.backgroundColor && props.backgroundColor};

    text-align:${(props) => { if (props.align) {
        return props.align;
    }
return 'inherit';
}};
    
    ${props => props?.padding && css`
    padding: ${props.padding};
    `}
    ${props => props?.margin && css`
    margin: ${props.margin};
    `}

    height:50vh;

    
`

export const StyledTitleFour = styled.h4`
    background-color:${props => props?.backgroundColor && props.backgroundColor};

    text-align:${(props) => { if (props.align) {
        return props.align;
    }
return 'inherit';
}};
    
    ${props => props?.padding && css`
    padding: ${props.padding};
    `}
    ${props => props?.margin && css`
    margin: ${props.margin};
    `}

    height:50vh;

    
`
export const StyledTitleFive = styled.h5`
    background-color:${props => props?.backgroundColor && props.backgroundColor};

    text-align:${(props) => { if (props.align) {
        return props.align;
    }
return 'inherit';
}};
    
    ${props => props?.padding && css`
    padding: ${props.padding};
    `}
    ${props => props?.margin && css`
    margin: ${props.margin};
    `}

    height:50vh;

    
`

export const StyledTitleSix = styled.h6`
    background-color:${props => props?.backgroundColor && props.backgroundColor};

    text-align:${(props) => { if (props.align) {
        return props.align;
    }
return 'inherit';
}};
    
    ${props => props?.padding && css`
    padding: ${props.padding};
    `}
    ${props => props?.margin && css`
    margin: ${props.margin};
    `}

    height:50vh;

    
`


export const StyledWrap = styled.p`
    background-color:${props => props?.backgroundColor && props.backgroundColor};

    text-align:${(props) => { if (props.align) {
        return props.align;
    }
return 'inherit';
}};
    
    ${props => props?.padding && css`
    padding: ${props.padding};
    `}
    ${props => props?.margin && css`
    margin: ${props.margin};
    `}

    height:50vh;

    
`
export const StyledGutterBottom = styled.p`
    background-color:${props => props?.backgroundColor && props.backgroundColor};

    text-align:${(props) => { if (props.align) {
        return props.align;
    }
return 'inherit';
}};
    
    ${props => props?.padding && css`
    padding: ${props.padding};
    `}
    ${props => props?.margin && css`
    margin: ${props.margin};
    `}

    height:50vh;

    
`
export const Styledparagraph = styled.p`
    background-color:${props => props?.backgroundColor && props.backgroundColor};

    text-align:${(props) => { if (props.align) {
        return props.align;
    }
return 'inherit';
}};
    
    ${props => props?.padding && css`
    padding: ${props.padding};
    `}
    ${props => props?.margin && css`
    margin: ${props.margin};
    `}
    

    height:50vh;

    
`