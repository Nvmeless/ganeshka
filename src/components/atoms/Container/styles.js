import styled, {css} from "styled-components";

export const StyledContainer = styled.div`
    background-color:${props => props?.backgroundColor && props.backgroundColor};

    
    ${props => props?.padding && css`
        padding: ${props.padding}px;
    `}

    ${props => props?.margin && css`
        margin: ${props.margin}px;
    `}

    ${props => props?.direction && css`
        flex-direction: ${props.direction};
    `}

    ${props => props?.justifyContent && css`
        justify-content: ${props.justifyContent};
    `}

    ${props => props?.direction && css`
        align-items: ${props.alignItem};
    `}
    
    display: flex;
    height:50vh;
`