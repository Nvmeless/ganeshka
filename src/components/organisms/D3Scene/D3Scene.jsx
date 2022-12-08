import * as d3 from 'd3';
import { useRef, useEffect, useState  } from 'react';
import { registerRoute } from 'workbox-routing';
import useInterval from '../../../hooks/useInterval.tsx'

const move = ({ x,y,friend, directionY, directionX,...props}, dataset) => {

  let quotien = 1.2

  return {
    friendPos:dataset.find((i) => {
        return i.friend === friend
    }),
    y: (() => (y + (Math.random() * (Math.random() < .5) ? directionY : directionY * -1) ))(),
    x: (() => (x + (Math.random() * (Math.random() < .5)? directionX : directionX * -1) ))(),
    directionX:Math.random() * directionX *quotien,
    directionY:Math.random() * directionY *quotien,
    ...props
  }
}


const generateDataset = (set, defaultMovement = (x) => x) => {
  if(set){
    return (set.map((circle) => {
      const {vector} = circle
      return vector(circle, set); 
    }))
  }

  let max = 8;
  const generateFriend = (i, max) => {
    let x = i;
    while(i == x){
        x = Math.round(Math.random()*max)
    }
    return x;
    }





    
    const data = [...[],
        ...(Array(Math.round(max * .8)).fill(0).map((obj, i) => (
                        {
                            friend:generateFriend(i, max),
                            id:i,
                            x:Math.random() * 400 + 10,
                            y:Math.random() * 1000 + 10,
                            directionX: (Math.random() < .5) ? Math.random() : Math.random() * -1,
                            directionY: (Math.random() < .5) ? Math.random() : Math.random() * -1,
                            vector: defaultMovement,
                            color:"red"
                        }
                    )
                )
            ),
            ...(Array(Math.round(max * .2)).fill(0).map((obj, i) => (
                {
                    friend:generateFriend(i, max),
                    id:i,
                    x:Math.random() * 800 + 10,
                    y:Math.random() * 500 + 10,
                    directionX: (Math.random() < .5) ? Math.random() : Math.random() * -1,
                    directionY: (Math.random() < .5) ? Math.random() : Math.random() * -1,
                    vector: defaultMovement,
                    color:"green"
                }
            )
        )
    )
    ]
  return (
    data
)}


const D3Scene = ({height = 400 , width = 400, ...props}) => {

  const ref = useRef()
  const [dataset, setDataset] = useState(
    generateDataset(null, move)
  )



  useEffect(() => {
    const svgElement = d3.select(ref.current)
    if(dataset.find((d) => {
        return d?.friendPos
    })){

        svgElement.selectAll("line")
    .data(dataset)
    .join("line")
      .attr("x1", d => d.x)
      .attr("y1", d => d.y)
      .attr("x2", d => d?.friendPos.x )
      .attr("y2", d => d?.friendPos.y )
      .attr("stroke", "black")

    }
    svgElement.selectAll("circle")
      .data(dataset)
      .join("circle")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r",  10)
        .attr('fill', d => { /*console.log("d", d);*/return d.color})
        .on('click', function(d,i){ 
          i.color = "green"
        //   setDataset(da)
          d3.select(d.target).attr('fill', d=> "green")
          console.log("clicked",d,i)  });
  }, [dataset])

  useInterval(() => {
    const newDataset = generateDataset(dataset, move)
    setDataset(newDataset)
  }, 10)

  return (
    <svg
    style={{
        backgroundColor:"transparent"
    }}
      height={height}
      width={width}
      // viewBox="0 0 100 50"
      ref={ref}
    />
  )
}




export default D3Scene