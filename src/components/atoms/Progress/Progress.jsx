import { useEffect, useState } from 'react';
import './style.css';


//Premier composant
export const CircularProgress = ({ value, color, varient }) => {

    const [perimeter, setPerimeter] = useState();

    useEffect(() => {
        const circle = document.querySelector('.path-determinate');
        const perimeter = circle.getTotalLength();
        setPerimeter(perimeter * value / 100);
    })
    

    const loadVarient = () => {
        if (typeof value == "number") {
            return (
                <circle className="path-determinate" stroke={color ? color : "blue"} cx="50" cy="50" r="20" fill="none" stroke-width="4" strokeDasharray={[perimeter, 200]} stroke-miterlimit="10"></circle>
            )
        }
        else {
            return (
                <circle className="path-determinate dash" stroke={color ? color : "blue"} cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"></circle>
            )
        }
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

//Deuxième composant
export const CircularProgressWithLabel = ({ value, color, varient }) => {

    const [Circlevalue, setCircleValue] = useState(value);

    if (Circlevalue === "progress") {
        setCircleValue(0);
    }
    if (Circlevalue > 100) {
        setCircleValue(0);
    }
    else if (Circlevalue < 101 && Circlevalue !== 0) {
        setTimeout(() => {
            setCircleValue(Circlevalue + 10);
        }, 1000)
    }
    else if (Circlevalue == 0) {
        setCircleValue(Circlevalue + 10);
    }

    return (
        <div style={{
            position: 'relative'
        }}>
            <CircularProgress value={Circlevalue} color={color} varient={varient} />
            <div className='circular-label'>
                {Circlevalue}%
            </div>
        </div>
    )
}


//Troisième composant
export const LinearProgress = ({backgroundColor, lineColor, varient }) => {


    const switchVarient = (varient) => {
        switch (varient) {
            case "determinate":
                return loadVarientDeterminate();
            case "buffer":
                return loadVarientBuffer();
            default: 
                return loadRegularProgress();
        }
    }


    const loadRegularProgress = () => {
        return (
            <div style={{
                position: 'absolute',
                width: 100 + '%',
                height: 100 + '%',
                backgroundColor: lineColor ? lineColor : "rgb(144, 202, 249)",
                animation: 'progress 1.5s linear infinite'
    
            }}></div>
        )
    }


    const loadVarientDeterminate = () => {
            return (
                <div style={{
                    position: 'absolute',
                    width: 100 + '%',
                    height: 100 + '%',
                    backgroundColor: backgroundColor ? backgroundColor : "rgb(144, 202, 249)",
                    animation: 'progress-determinate 4s ease infinite'
                }}></div>
            )
    }

    const loadVarientBuffer = ( ) => {
        return (
            <div style={{
                position: 'absolute',
                width: 100 + '%',
                height: 100 + '%',
                backgroundColor: backgroundColor ? backgroundColor : "rgb(144, 202, 249)",
                animation: 'progress-buffer 4s ease infinite'
            }}></div>
        )
    }


    
    return (
        <div className='progress-container'>
            <div style={{
                position: 'absolute',
                width: 100 + '%',
                height: 100 + '%',
                backgroundColor: backgroundColor ? backgroundColor : "rgb(72, 101, 124)",
                zIndex : 0
            }}></div>
            {switchVarient(varient)}
        </div>
    )
}


export const LinearProgressWithLabel = ({ value }) => {

    const [LineValue, setLineValue] = useState(value);

    if (LineValue === "progress") {
        setLineValue(0);
    }
    if (LineValue > 100) {
        setLineValue(0);
    }
    else if (LineValue < 101 && LineValue !== 0) {
        setTimeout(() => {
            setLineValue(LineValue + 10);
        }, 1000)
    }
    else if (LineValue == 0) {
        setLineValue(LineValue + 10);
    }

    return (
        <div className='progress-container' style={{
            overflow : 'visible!important'
        }}>
            <div style={{
                position: 'absolute',
                width: 100 + '%',
                height: 100 + '%',
                backgroundColor: "rgb(72, 101, 124)",
                zIndex : 0
            }}></div>
            <div style={{
                    position: 'absolute',
                    width: LineValue + '%',
                    height: 100 + '%',
                    backgroundColor: "rgb(144, 202, 249)",
                    transition: 'all 0.5s ease'
                }}></div>
            <div style={{
                color: 'white',
                position : 'absolute',
                zIndex: 3,
                left: 103 + '%',
                top: -10 + 'px',
            }}>
                {LineValue}%
            </div>
        </div>
    )
}
    


