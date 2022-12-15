import * as d3 from 'd3';
import {useRef, useEffect, useState} from 'react';
import useInterval from '../../hooks/useInterval.tsx';


const generateDataset = () =>  { 
    let max = 20


    return Array(Math.round(max)).fill(0).map((n,i) => {
        return {
            id:i,
            coord:[Math.round(Math.random() * 300), Math.round(Math.random() * 400)],
            size: Math.round(Math.random() * 10),
            color:  "#" + Math.floor(Math.random()*16777215).toString(16),
            link: generateLinks(i, max)
        }
    })
}
const generateLinks = (n, max) => {
    let i = n;
    while(n === i)
    {
        i = Math.round(Math.random() * max);
    }
    return i;
}

const moveDataset = (dataset) => {
    let speedVal = 0;
    let speedFactor = 1;

    let speed = Math.random() * speedFactor;
    return dataset.map((x) => {
        return {
            ...x,
            coord:[x.coord[0] + (speedVal + speed) * (Math.random() > .5 ? 1 : -1), x.coord[1] + (speedVal + speed) * (Math.random() > .5 ? 1 : -1)]
        }

    })
}


export default function D3Scene() {

    const ref = useRef();  
    const [dataset,setDataset] = useState(generateDataset());
    useInterval(() => {
        const  newDataset = moveDataset(dataset);
        setDataset(newDataset)
    }, 100)
    useEffect(() => {
        const svgElement = d3.select(ref.current);
        
        // if(dataset.find((d) => {d.friend}))
        svgElement.selectAll('line').data(dataset).join('line')
        .attr('x1', d => d.coord[0])
        .attr('y1', d => d.coord[1])
        .attr('x2', d => {
            console.log(dataset.find(x => d.link == x.id))
            return dataset.find(x => d.link == x.id)?.coord[0]})
        .attr('y2', d => dataset.find(x => d.link == x.id)?.coord[1])
        .attr('stroke', "black")

        svgElement.selectAll('circle')
        .data(dataset)
        .join('circle')
        .attr('cx', d => d.coord[0])
        .attr('cy', d => d.coord[1])
        .attr('r', d => d.size)
        .attr('fill', d => d.color)


        




        return (() => {
            d3.selectAll('circle').remove()

        })

    }, [dataset])







    return (<svg ref={ref} />);
}