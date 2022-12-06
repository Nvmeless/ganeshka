import styled, {css} from "styled-components";


export const StyledRating = styled.div`

    display: flex;
    margin-left: auto;
    margin-right: auto;
    padding: 0px;
    
    // si le prop size est utilisé et/ou set à "medium"
    ${props => ((props?.size === "medium")||(!props?.size)) && css`
        width: ${props => parseInt(props?.max) * 24}px;
        height: 24px;
        svg {
            width: 24px; 
            height: 24px;
        }
        .MuiRating-label p{
            font-size: 18px;
        }
        
    `}
    // si le prop size est set à "small"
        ${props => (props?.size === "small") && css`
            width: ${props => parseInt(props?.max) * 18}px;
            height: 18px;
            svg {
                width: 18px;
                height: 18px;
            }
            .MuiRating-label p{
                font-size: 14px;
            }
        `}
        // si le prop size est set à "large"
        ${props => (props?.size ==="large") && css`
            width: ${props => parseInt(props?.max) * 30}px;
            height: 30px;
            svg{
                width: 30px;
                height: 30px;
            }
            .MuiRating-label p{
                font-size: 23px;
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

    .MuiRating-label p{
        text-align: center;
        margin: auto;
        margin-left: 10px;
    }

`

