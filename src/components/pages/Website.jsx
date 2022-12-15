import { useState } from 'react';
import {fadeIn, fadeOut} from 'react-animations';
import styled, {keyframes} from 'styled-components';
import WebsiteHandler from '../../core/WebsiteHandler';
import Front from '../template/Front';
import CustomThreeGlobalScene from '../../three/CustomThreeGlobalScene';
import CardArrangement from '../../three/CardArrangement';
export default function Website() {

    const fadeInAnimation = keyframes`${fadeIn}`;
    const fadeOutAnimation = keyframes`${fadeOut}`;
    const animationTimeFade = 7;
    const [handler, setHandler] = useState(new WebsiteHandler)
    const [htmlFront, setHtmlFront] = useState(false);
    const [displayScene, setDisplayScene] = useState(true);

    const FadeInDiv = styled.div`
        animation: 7s ${fadeInAnimation}; 
        background-color:red;
        height:100vh;
        width:100vw;
    
        `;
    const FadeOutDiv = styled.div`
        animation: ${props => props.animationTime}s ${fadeOutAnimation}; 
        background-color:red;
        height:100vh;
        width:100vw;
    
        `;

    const handleEndStartAnim = () => {
        if(htmlFront === false){
            setTimeout(() => {
                setHtmlFront(true);
            }, (animationTimeFade * 900))
        }
    } 

    const welcome = ( ) => { 
        // changer d'etat
        handleDestructionByFade(animationTimeFade);
    }
    const destructionByFade = () => { 
        setDisplayScene(false);
    }

    const handleDestructionByFade = (time) => {
        setTimeout(destructionByFade, (time * 1000))
    }

    return (
        <>
        <Front
            before={
                < FadeOutDiv animationTime={animationTimeFade}><CustomThreeGlobalScene>
                <CardArrangement endAnim={handleEndStartAnim} uWidth={1}  uHeight={1} eltWidth={2} eltHeight={1} eltDepth={.1} random={false}></CardArrangement>
              </CustomThreeGlobalScene></FadeOutDiv> 
            }
            display={htmlFront}
        >

            Salut les zouzou

        </Front>


        </>
    )


}