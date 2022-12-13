import React from "react";
import {Canvas } from "@react-three/fiber";
import styled, { keyframes } from 'styled-components';
import { fadeOut } from 'react-animations'

import StartAnim from "./StartAnim.jsx";

const fadeOutAnimation = keyframes`${fadeOut}`;

const heightCard = (.54) * 2;
const widthCard = (.85) * 2;

export default function CustomThreeGlobaleScene (props){
    return (
            //<FadeOutDiv isFading>
                <Canvas camera={{ position: [0, 0, 15], fov: 50 }}
                 shadowMap="true"
                 style={{height: "100vh", width:"100vw"}} >
                    <ambientLight intensity={0.1} castShadow />
                    <directionalLight color={props.lightColors.colordirectionalLight} intensity={1} position={[0,0,5]} castShadow/>
                    <pointLight  color={props.lightColors.colorPoint} position={[10,10,10]} castShadow />
                    <StartAnim animColor={{
                        arrangementColor:props.cardColor
                    }} handleOnEnd={props.handleOnEnd}
                    heightCard = {props.heightCard}
                    widthCard = {props.widthCard}
                    depthCard = {props.depthCard}
                    ></StartAnim>
                </Canvas>
            //</FadeOutDiv>
            );
}
