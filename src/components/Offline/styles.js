import styled, {css} from "styled-components";

export const StyledOffline = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    left: 0;
    padding-top: 40px;
    width: 100vw;
    @media only screen {
      padding-top: 20px;
    }
  
    @media only screen and (max-width: 500px) {
      padding-top: 20px;
    }
  
    
  
`
export const StyledOfflineContent = styled.div`
    padding: 15px 20px;
    position: absolute;
    background: rgb(1, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    top:0;
    left: calc(50vw);
    transform: translate(-50%, 10%);
    width: 20vw;
`
export const StyledOfflineSvg = styled.svg`
    height: 50px;
    width: auto;
`

export const StyledOfflineOverlay= styled.div`
    position: absolute;
    z-index: 3;
    background: rgba(0, 0, 0, 0.3);
    top: 0;
    width: 100vw;
    height: 100vh;
    min-width: 100vw;
    transition: opacity 0.5s ease-in-out;
    pointer-events: none;
    ${props => props?.visible ? "opacity: 1;pointer-events: unset;" : ""}
`



// @import 'vars';