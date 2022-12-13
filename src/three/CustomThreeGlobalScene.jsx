import React, {useRef, useState} from "react";
import {Canvas, useFrame} from "@react-three/fiber"
import DigiCard from './DigiCard'
function Box(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()

    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'white' : 'white'} />
      </mesh>
    )
  }


export default function CustomThreeGlobalScene ( props ) {
    return(
        <Canvas>
            <directionalLight color={'cyan'} intensity={1} position={[0,0,5]}  castShadow/>
            {props.children}
    </Canvas>   

    )
}