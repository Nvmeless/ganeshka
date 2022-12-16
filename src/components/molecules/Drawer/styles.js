import styled, {css} from "styled-components";

export const StyledDrawer = styled.div`
    background-color:${props => props?.backgroundColor && props.backgroundColor};
    transition: all 0.3s ease-in-out;
    transform: translate(-200px);
    position:fixed;
    box-shadow: 5px 0px 18px rgb(0, 0, 0, 0);

    ${props => props?.width && css`
    width: ${props.width};
    `}
    ${props => props?.height && css`
    height: ${props.height};
    `}

`