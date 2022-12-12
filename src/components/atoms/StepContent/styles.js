import styled, {css} from "styled-components";

export const StyledStepperContent = styled.div`
    background-color:${props => props?.backgroundColor && props.backgroundColor};

    
    ${props => props?.padding && css`
    padding: ${props.padding};
    `}
    ${props => props?.margin && css`
    margin: ${props.margin};
    `}

    height:50vh;
`