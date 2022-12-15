import {useRef} from 'react';
import {useFrame} from "@react-three/fiber"
import { useState } from 'react';
export default function DigiCard (props) {
    const [active, setActive] = useState(false)
    const [width, setWidth] = useState(props.width);
    const [height, setHeight] = useState(props.height);
    const [depth, setDepth] = useState(props.depth);

    const mesh = useRef();
    let nbTour = .24

    useFrame(({clock}) =>{
    // mesh.current.rotation.z += .2
    // console.log( "mesh",mesh.current)
        if(!active){
    mesh.current.rotation.x += .0001
    mesh.current.rotation.y += .005

        }
    })
    return (
        <mesh
        {...props}
        ref={mesh}
        // rotation={[((Math.PI / 2) * nbTour), ((Math.PI / 2) * nbTour), ((Math.PI / 2) * nbTour)]}
        scale={1}
        onClick={() => {setActive(!active)}}
        >
            <boxGeometry args={[width, height, depth]}/>
            <meshStandardMaterial color={active ? "green": "grey"}/>

        </mesh>
    )



}