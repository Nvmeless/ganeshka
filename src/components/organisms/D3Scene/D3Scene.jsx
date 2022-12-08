import * as d3 from 'd3';
import { useRef, useEffect, useState  } from 'react';
import { registerRoute } from 'workbox-routing';
import useInterval from '../../../hooks/useInterval.tsx'

const move = ({vector, x,y}) => {
  return {

    y: (() => (y + (Math.random() * (Math.random() < .5) ? .15 : -.15) ))(),
    x: (() => (x + (Math.random() * (Math.random() < .5) ? .15 : -.15) ))(),
    vector: vector
  }
}


const generateDataset = (set, defaultMovement = (x) => x) => {
  if(set){
    return (set.map((circle) => {
      const {vector} = circle
      return vector(circle); 
    }))
  }
  return (
  Array(10).fill(0).map(() => ({
    x:Math.random() * 400 + 10,
    y:Math.random() * 400 + 10,
    vector: defaultMovement
  }))
)}


const D3Scene = ({height = 400 , width = 400, ...props}) => {

  const ref = useRef()
  const [dataset, setDataset] = useState(
    generateDataset(null, move)
  )



  useEffect(() => {
    const svgElement = d3.select(ref.current)
    svgElement.selectAll("circle")
      .data(dataset)
      .join("circle")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r",  10)
        .attr('fill', "red")
  }, [dataset])

  useInterval(() => {
    const newDataset = generateDataset(dataset, move)
    setDataset(newDataset)
  }, 100)

  return (
    <svg
      height={height}
      width={width}
      // viewBox="0 0 100 50"
      ref={ref}
    />
  )
}




export default D3Scene