import styled, {css} from "styled-components";

export const StyledRating = styled.div`

    display:flex;
    
    .star-style, .star-highlight-style {
        cursor: pointer;
        height: auto;
    }

    .star-disabled-style, .star-disabled-highlight-style {
        opacity: 0.5;
    }

    svg {
        ${props => ((props?.size === "medium")||(!props?.size)) && css`
            width: 24px;
            height: 24px;
        `}
        ${props => (props?.size === "small") && css`
            width: 18px;
            height: 18px;
        `}
        ${props => (props?.size ==="large") && css`
            width: 30px;
            height: 30px;
        `}
    }
`