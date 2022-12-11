import styled, {css} from "styled-components";

export const StyledTitle = styled.h2`

    ${props => props?.size && css`
        font-size: ${props.size}px;
    `}

    ${props => props?.backgroundColor && css`
        background-color: ${props.backgroundColor};
    `}
`
