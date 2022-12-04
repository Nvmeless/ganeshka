import './style.css';

export const CircularProgress = ({ value, color, varient }) => {


    const loadVarient = () => {
        const setProgress = (value) => {
            const circle = document.querySelector('.path-determinate');
            const perimeter = circle.getTotalLength();
            return perimeter * value / 100;
        }
        return (
            <circle className="path-determinate" stroke={color ? color : "blue"} cx="50" cy="50" r="20" fill="none" stroke-width="4" strokeDasharray={[setProgress(value), 200]} stroke-miterlimit="10"></circle>
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






