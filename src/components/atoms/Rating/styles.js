import styled, {css} from "styled-components";


export const StyledRating = styled.div`

    position: relative;
    text-align: left;
    padding: 0px;
    
    // si le prop size est utilisé et/ou set à "medium"
    ${props => ((props?.size === "medium")||(!props?.size)) && css`
        width: ${props => parseInt(props?.max) * 24}px;
        height: 24px;
        span {
            width: 24px; 
            height: 24px;
        }  
        svg {
            height: 24px;
        }
        
    `}
    // si le prop size est set à "small"
        ${props => (props?.size === "small") && css`
            width: ${props => parseInt(props?.max) * 18}px;
            height: 18px;
            span {
                width: 18px;
                height: 18px;
            } 
            svg {
                height: 18px;
            }
        `}
        // si le prop size est set à "large"
        ${props => (props?.size ==="large") && css`
            width: ${props => parseInt(props?.max) * 30}px;
            height: 30px;
            .star-container{
                width: 30px;
                height: 30px;
            }
            svg{
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

    // les icons positif doivent recouvrir les icons vides (voir rating_view.png)
    .active-star-style{
        position: absolute;
        white-space: nowrap;
        overflow: hidden;
    }

`

