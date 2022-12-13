import {useRef} from 'react';
import {useFrame} from "@react-three/fiber"
export default function DigiCard () {
    const width = 1;
    const height = .2;
    const depth = 1;

    const mesh = useRef();
    let nbTour = .24

    useFrame(({clock}) =>{
    mesh.current.rotation.y += .0w2
    // mesh.current.rotation.z += .2
    mesh.current.rotation.x += .01
    })
    
    return (
        <mesh
        ref={mesh}
        rotation={[((Math.PI / 2) * nbTour), ((Math.PI / 2) * nbTour), ((Math.PI / 2) * nbTour)]}
        
        >
            <boxGeometry args={[width, height, depth]}/>
            <meshStandardMaterial color="pink"/>
        
        </mesh>
    )



}