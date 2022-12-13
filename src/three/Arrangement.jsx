import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import DigiCard from "./DigiCard.jsx";
import gsap from "gsap/all";



export default function Arrangement (props) {

    const group = useRef();
    
    const [active, setActive] = useState(false);
    const [kick, setKick] = useState(false);
    const [nX, setNX] = useState(1);
    const [nXMax, setNXMax] = useState(props.nWidth);
    const [nY, setNY] = useState(1);
    const [nYMax, setNYMax] = useState(props.nHeight);
    const [isAnimated, setIsAnimated] = useState(false);
    const [isFirst, setFirstPassed] = useState(false);
    const [heightCard, setHeightCard] = useState(props.heightCard);
    const [widthCard, setWidthCard] = useState(props.widthCard);
    const [depthCard, setDepthCard] = useState(props.depthCard);
    useFrame(() => {
        // animation code goes here
        if(active){
            Anim(null, () => { 
                setActive(false);
            })
        }
      })

      let t1 = gsap.timeline();
  
      let nbG = {
          x: 1,
          y: 1,
      }

      let useFirst = () => {
          return isFirst ? true : () => {setFirstPassed(true); return false}; 
      }

      let Anim = (params= null , callBack = () => {}) => {
           t1.to(nbG,{y:nYMax, x: nXMax ,onUpdate:() => {

            if(nY !== Math.floor(nbG.y) && nY < Math.floor(nbG.y)){
                setNY(Math.floor(nbG.y))
            }
            if(nX !== Math.floor(nbG.x) && nX < Math.floor(nbG.x) ){
                setNX(Math.floor(nbG.x))
            }

           },onComplete:() => {
            callBack()
            setIsAnimated(false);
         },
        duration:1})

      }
    let createArrangement = (xW = 1,yH = 1,random = true, animated) => {
        let listToDisplay = [];
        let i = 0;
        let lastY;
        let lastX;

        for(let y = ( yH == 1 ) ? (0) : (-yH + 1); y < yH; y++){
            lastY = ((y + 1) == nYMax);
            for(let x = ( xW == 1 ) ? (0) : (-xW + 1); x < xW; x++){ 
            lastX = ((x + 1) == nXMax);
            if(lastX && lastY){
                props.handleOnEnd();
            }
                random ? (
                    listToDisplay.push({
                        key : ( y + '_' + x ),
                        position : [((x * (Math.random() * 1)) * widthCard),((y * (Math.random() * 10)) * heightCard ),(Math.random() * 5) ],
                        rotation : [Math.sin((Math.random() * 1)),Math.sin((Math.random() * 1)),Math.sin((Math.random() * 1)) ]
                    })) : 
                (
                    listToDisplay.push({
                        key : ( y + '_' + x ),
                        "i":i++,
                        position : [(x * widthCard),(y * heightCard ),1 ],
                        rotation : [0,0,0],
                        animation : {
                            x:1,
                            y:1,
                            z:1,
                        },
                        last: (
                            (x ===  (xW - 1) &&  y === (yH - 1))
                        )
                    })  
                );
                
            } 
        }
        return listToDisplay;
    }
    return (
        <group onClick={(event) => {
            setActive(!active);
            setKick(!kick);
        }}>
        {
            createArrangement(nX, nY, false).map((x, i) => (<DigiCard key={x.key} cardColor={props.arrangementColor} heightCard={heightCard} depthCard={depthCard} widthCard={widthCard} i={x.i} last={x.last} handleOnEnd={props.handleOnEnd} appearAnim={ useFirst} key={x.key} rotation={x.rotation} position={x.position} customAnimated={active} customAnimation={x.animation} />) )
        }
        </group>
    );
}