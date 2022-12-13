import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Euler } from "three";
import { Quaternion } from "three";
import gsap from "gsap/all";

 //const heightCard = (.5) * 2;
 //const widthCard = (.5) * 2;
 //const depthCard = 1
 
//const heightCard = (.54) * 2;
//const widthCard = (.85) * 2;
//const depthCard = .01
export default function DigiCard(props) {
    const mesh = useRef()

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const [coeffSpeed, setSpeed] = useState(.2);
    const [coeffTurn, setTurn] = useState(.5);
    const [unique, setUniq] = useState(true);
    const [rotationToReach, setRotationToReach] = useState(null);
    const [positionToReach, setPositionToReach] = useState(props.position);
    const [customQuat, setCustomQuat] = useState(new Quaternion());
    const [isAnimated, setIsAnimated] = useState(false);
    const [appearAnim, setAppearing] = useState(props.appearAnim);
    const [hasBeenClicked, setClicked] = useState(false);
    const [heightCard, setHeightCard] = useState(props.heightCard);
    const [widthCard, setWidthCard] = useState(props.widthCard);
    const [depthCard, setDepthCard] = useState(props.depthCard);
    // const [animation, setAnimation] = useState()

    let Event = (type) => {
        switch (type) {
            case 'click':
                
                break;
        
            default:
                break;
        }
    } 

   

    let Rotate = (eulerStart, turnNumber = 0, rotationRules = {}) => {
        turnNumber *= (Math.PI * 2);
        let eulerRef = eulerStart instanceof Euler ? (
            eulerStart.clone()
        ) : (
            new Euler()
        );
        let rotationX = ((rotationRules.hasOwnProperty("x") ? (rotationRules.x) : (true)) ) ? (true) : (false);
        let rotationY = ((rotationRules.hasOwnProperty("y") ? (rotationRules.y) : (true)) ) ? (true) : (false);
        let rotationZ = ((rotationRules.hasOwnProperty("z") ? (rotationRules.z) : (true)) ) ? (true) : (false);
        eulerRef.set(
            (rotationX ? (eulerStart.x + turnNumber) : (eulerStart.x)),
            (rotationY ? (eulerStart.y + turnNumber) : (eulerStart.y)),
            (rotationZ ? (eulerStart.z + turnNumber) : (eulerStart.z))
        );
        return {
            "eulerStart": eulerStart,
            "eulerEnd": eulerRef
        };
    }

    let t1 = gsap.timeline();

    let Anim = (params= null , callBack = () => {}) => {
        setIsAnimated(true);
        // t1.to(mesh.current.rotation, {x: Math.PI * 2, y: Math.cos(Math.PI * 1), z: Math.PI * 1, duration: 1})


        if(params !== null && params.mode ==="strict1"){
            t1.to(mesh.current.rotation, {x: ( Math.PI * 1), y: ( Math.PI * 1), z: ( Math.PI * 1), duration: 2, onComplete:() => {
                // t1.to(mesh.current.rotation, {x: Math.cos(Math.PI * 1), y: Math.cos(Math.PI * 1), z: Math.cos(Math.PI * 1), duration: 5, onComplete:() => {
                    callBack()
                    setIsAnimated(false);
                 }})
        } else {
        t1.to(mesh.current.rotation, {x: (mesh.current.rotation.x + Math.PI * 1), y: (mesh.current.rotation.y + Math.PI * 1), z: (mesh.current.rotation.z + Math.PI * 1), duration: 2, onComplete:() => {
        // t1.to(mesh.current.rotation, {x: Math.cos(Math.PI * 1), y: Math.cos(Math.PI * 1), z: Math.cos(Math.PI * 1), duration: 5, onComplete:() => {
            callBack()
            setIsAnimated(false);
         }})
        }
    }


    let ResetRotation = () => {
        mesh.current.rotation = Rotate(mesh.current.rotation,)
    }
    useFrame(({ clock }, delta) => {
        if(unique){
            setRotationToReach(Rotate(mesh.current.rotation,2));
            setUniq(false);
        }
        if(appearAnim){
            // Anim(null,() => { console.log("Fin d'animation DigiCard Clone")})
            Anim(null,() => {});
            setAppearing(false);
            setClicked(true);

        }
        // if(!isAnimated && props.appearAnim !== true) {
            if(!isAnimated) {
                if(hasBeenClicked === false){
                    mesh.current.rotation.y += .007;
                    mesh.current.rotation.z += .001;
                }
        if(active){
            setClicked(true);
            // Anim({mode:"strict1"},() => { console.log("Fin d'animation DigiCard First") })
            Anim({mode:"strict1"},() => {});
            setActive(false)
        }
    }

    })

    return (
        <mesh {... props}
        ref={mesh} 
        // scale={active ? 1.5 : 1}
        // scale={hovered ? 2 : 1}
        scale={1}
        // rotation= {[((Math.PI / 2) * (1)),((Math.PI / 2) * (1)), 0]}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
         >
             <boxGeometry args={[widthCard, heightCard, depthCard]} />
             <meshStandardMaterial color={props.cardColor}/>
        </mesh> 
    )
}

