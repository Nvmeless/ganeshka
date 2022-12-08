import * as d3 from 'd3';
import { useRef, useEffect, useState  } from 'react';
import useInterval from '../../../hooks/useInterval.tsx'
const generateDataset = () => (
  Array(10).fill(0).map(() => ([
    Math.random() * 400 + 10,
    Math.random() * 400 + 10,
  ]))
)


const D3Scene = ({height = 400 , width = 400, ...props}) => {

  const ref = useRef()
  const [dataset, setDataset] = useState(
    generateDataset()
  )



  useEffect(() => {
    const svgElement = d3.select(ref.current)
    svgElement.selectAll("circle")
      .data(dataset)
      .join("circle")
        .attr("cx", d => d[0])
        .attr("cy", d => d[1])
        .attr("r",  10)
  }, [dataset])

  useInterval(() => {
    const newDataset = generateDataset()
    console.log("Hey")
    setDataset(newDataset)
  }, 1000)

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