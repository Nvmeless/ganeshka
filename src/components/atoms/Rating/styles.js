import styled, {css} from "styled-components";


export const StyledRating = styled.div`

    position: relative;
    text-align: left;
    padding: 0px;

    ${props => ((props?.size === "medium")||(!props?.size)) && css`
        width: ${props => parseInt(props?.max) * 24}px;
        height: 24px;
        span, svg {
            width: 24px; 
            height: 24px;
        }  
        
    `}
        ${props => (props?.size === "small") && css`
            width: ${props => parseInt(props?.max) * 18}px;
            height: 18px;
            span, svg {
                height: 18px;
            }
            svg {
                width: 18px;
            } 
        `}
        
        ${props => (props?.size ==="large") && css`
            width: ${props => parseInt(props?.max) * 30}px;
            height: 30px;
            svg {
                width: 30px;
                height: 30px;
            } 
        `}

    .icon-cursor-style {
        cursor: pointer;
    }

    .star-disabled-style, .star-disabled-highlight-style {
        opacity: 0.5;
    }

    .iconContainer star-disabled-style, .star-style, .star-readOnly-style{
        position: absolute;
        left: 0px;
        z-index: 2;
        ${props => ((props?.size === "medium")||(!props?.size)) && css`
            height: 24px;
        
        `}
        ${props => (props?.size === "small") && css`
            height: 18px;
        `}
        
        ${props => (props?.size ==="large") && css`
            height: 30px;
        `}
        white-space: nowrap;
        overflow: hidden;
    }

    .emptyIconContainer{
        position: absolute;
        left: 0px;
        width: 100%;
        z-index: 1;
    }

`