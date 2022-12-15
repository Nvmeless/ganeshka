import {useState} from 'react';
import DigiCard from "./DigiCard";

export default function CardArrangement(props) {
    
    const {random} = props;
    const [uWidth, setUWidth] = useState(props.uWidth)
    const [uHeight, setUHeight] = useState(props.uHeight)
    const [eltWidth, setEltWidth] = useState(props.eltWidth)
    const [eltHeight, setEltHeight] = useState(props.eltHeight)
    const [eltDepth, setEltDepth] = useState(props.eltDepth)


    const createArrangement = (xW = 1, yH =1,random = true, animated) => {
        let listToDisplay = [];
        let i = 0; 
        let lastY, lastX;
        console.log("RAND", random)
        for(let y = (yH == 1) ? (0) : (-yH + 1); y <  yH ; y++ ){
            for(let x = (xW == 1) ? (0) : (-xW + 1); x <  xW ; x++ ){
                random ? (listToDisplay.push({
                    key: `${x}_${y}`,
                    "i": i++,
                    position: [Math.round(Math.random() * 5),Math.round(Math.random() * 5), 0 ],
                    rotation: [0,0,0]
                })) : (listToDisplay.push({
                        key: `${x}_${y}`,
                        "i": i++,
                        position: [(x * eltWidth),(y * eltHeight), 0* eltDepth ],
                        rotation: [0,0,0],
                        width: eltWidth,
                        height: eltHeight,
                        depth: eltDepth,
                    })) 
                }
        }

        props.endAnim()
        return listToDisplay;
    }
    return (
        <group>
            	{createArrangement(uWidth, uHeight, random).map(elt => {
                return <DigiCard {...elt}></DigiCard>})}
        </group>
    )
}