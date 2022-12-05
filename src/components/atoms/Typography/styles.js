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

export const StyledTitle = styled.h1`
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