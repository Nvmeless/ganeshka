import styled from "styled-components";


export const StyledRating = styled.div`

    .MuiRating-root{
        display: flex;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
        padding: 0px;
    }  

    // si le prop size est utilisé et/ou set à "medium"
    .MuiRating-sizeMedium{
        .container-icons-style{
            width: ${props => parseInt(props?.max) * 24}px;
            height: 24px;
        }
        svg {
            width: 24px; 
            height: 24px;
        }
        .MuiRating-label p, .MuiRating-labelEmptyValueActive p{
            font-size: 18px;
            width: 115px;
        }
        
    }
    // si le prop size est set à "small"
    .MuiRating-sizeSmall{
        .container-icons-style{
            width: ${props => parseInt(props?.max) * 18}px;
            height: 18px;
        }
        svg {
            width: 18px;
            height: 18px;
        }
        .MuiRating-label p, .MuiRating-labelEmptyValueActive p{
            font-size: 14px;
            width: 80px;
        }
    }

    // si le prop size est set à "large"
    .MuiRating-sizeLarge{
        .container-icons-style{
            width: ${props => parseInt(props?.max) * 30}px;
            height: 30px;
        }
        svg{
            width: 30px;
            height: 30px;
        }
        .MuiRating-label p, .MuiRating-labelEmptyValueActive p{
            font-size: 23px;
            width: 150px;
        }
    }

    .icon-cursor-style {
        cursor: pointer;
    }

    .Mui-disabled, .Mui-disabled-highlight {
        opacity: 0.5;
    }

    // les icons positif doivent recouvrir les icons vides (voir rating_view.png)
    .MuiRating-iconActive{
        position: absolute;
        white-space: nowrap;
        overflow: hidden;
    }
    
    .MuiRating-label p, .MuiRating-labelEmptyValueActive p{
        margin: 0px;
        margin-left: 10px;
        text-align: left;
    }
    

`

