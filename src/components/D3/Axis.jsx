
import {useEffect, useRef} from 'react';
import * as d3 from 'd3';


export const Axis = () => {
    const ref = useRef();
    
    useEffect(() => {
        const svgElt = d3.select(ref.current);
        const xScale  = d3.scaleLinear()
        .domain([0, 100])
        .range([[10, 290]])

        const axisGeneration = d3.axisBottom(xScale);


        //Memes Lignes 1 
        // svgElt.append('g').call(axisGeneration);
        //Memes Lignes 2
        const newG = svgElt.append('g')
        axisGeneration(newG);

    }, [])

return (
    <svg ref={ref}><path></path> </svg>
)


}