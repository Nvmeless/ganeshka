
import * as d3 from "d3";
import useChartDimensions from '../../../../hooks/useChartDimensions'
import {useState, useEffect, useRef} from 'react'
import countryShapes from '../../../../assets/datas/countries.json'
export const Map = ({ projectionName = "geoEquirectangular" }) => {
    // grab our custom React hook we defined above
    const [ref, dms] = useChartDimensions({})
    // this is the definition for the whole Earth
    const sphere = { type: "Sphere" }
    const projectionFunction = d3[projectionName];
    //   || d3GeoProjection[projectionName] // https://github.com/d3/d3-geo
    const projection = projectionFunction()
      .fitWidth(dms.width, sphere)
    const pathGenerator = d3.geoPath(projection)
    // size the svg to fit the height of the map
    const [
      [x0, y0],
      [x1, y1]
    ] = pathGenerator.bounds(sphere)
    const height = y1
    return (
      <div
        ref={ref}
        style={{
          width: "50%",
        }}
      >
        <svg width={dms.width} height={height}>
          <defs>
  {/* some projections bleed outside the edges of the Earth's sphere */}
  {/* let's create a clip path to keep things in bounds */}
            <clipPath id="Map__sphere">
              <path d={pathGenerator(sphere)} />
            </clipPath>
          </defs>
          <path
            d={pathGenerator(sphere)}
            fill="#8ab4f8"
          />
          <g style={{ clipPath: "url(#Map__sphere)" }}>
            {/* we can even have graticules! */}
            <path
            //   d={pathGenerator(d3.geoGraticule10())}
              fill="none"
              stroke="#fff"
            />
            {countryShapes.features.map((shape) => {
              return (
                <path
                onClick={(e) => { console.log("JEU", e)
            
                d3.select(e.target).attr('fill', 'red')
            }}
            onMouseOver={(e) => { console.log("JEU", e)
            
            d3.select(e.target).attr('fill', 'green')
        }}
                  key={shape.properties.subunit}
                  d={pathGenerator(shape)}
                  fill="#9980FA"
                //   stroke="#fff"
                >
                  <title>
                    {shape.properties.name}
                  </title>
                </path>
              )
            })}
          </g>
        </svg>
      </div>
    )
  }