import { useEffect, useState } from 'react';
import './style.css';

export const CircularProgress = ({ value, color, varient }) => {


    const [perimeter, setPerimeter] = useState();

    useEffect(() => {
        const circle = document.querySelector('.path-determinate');
        const perimeter = circle.getTotalLength();
        setPerimeter(perimeter * value / 100);
    })


    const loadVarient = () => {
        return (
            <circle className="path-determinate" stroke={color ? color : "blue"} cx="50" cy="50" r="20" fill="none" stroke-width="4" strokeDasharray={[perimeter, 200]} stroke-miterlimit="10"></circle>
        )
    }

    return (
        <svg className={varient && value ? "circular-no_rotate" : "circular"}>
            {varient && value ?
                loadVarient()
                :
                <circle className="path" stroke={color ? color : "blue"} cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"></circle>
            }
        </svg>
    )
}





