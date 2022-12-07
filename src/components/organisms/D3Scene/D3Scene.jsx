import * as d3 from 'd3';
import { useRef, useEffect } from 'react';

const generateDataset = () => {
  
}


const D3Scene = () => {

  const ref = useRef()

  useEffect(() => {
    const svgElement = d3.select(ref.current)
    svgElement.append("circle")
      .attr("cx", 150)
      .attr("cy", 70)
      .attr("r",  50)
  }, [])


  return (
    <svg
      ref={ref}
    />
  )
}

export default D3Scene