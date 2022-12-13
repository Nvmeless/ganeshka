import React  from 'react'
import {
  Canvas,
} from "@react-three/fiber";

// import { OrbitControls } from '@react-three/drei'


export default function CustomThreeScene (props){


    return (
                <Canvas camera={{ position: [0, 0, 15], fov: 50 }}
                //  shadowMap="false"
                 style={{height: props.height, width:props.width}} >
                    <ambientLight intensity={0.1} castShadow />
                    <directionalLight color={props?.colors?.colordirectionalLight ? props?.colors?.colordirectionalLight: "red"} intensity={1} position={[0,0,5]} castShadow/>
                    <pointLight  color={props?.colors?.colorPoint ? props?.colors?.colorPoint: "red"} position={[10,10,10]} castShadow />
                    {props.children}
                    {/* <OrbitControls /> */}
                </Canvas>);
    
}


