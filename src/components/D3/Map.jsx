import useChartDimensions from "../../hooks/combineChartDimension"
import * as d3 from 'd3';


//https://github.com/Wattenberger/Wattenberger-2019/blob/master/src/components/Blog/posts/D3AndReact/countries.json
import countriesShapes from '../../assets/datas/geojson/world.json'

export default function Map ({projectionName = "geoEquirectangular"}) {

    const [ref, dms] = useChartDimensions({});

    const sphere = {
        type:"Sphere"
    }
    const projectionFunction =d3[projectionName];
    const projection = projectionFunction().fitWidth(dms.width, sphere);

    const pathGenerator = d3.geoPath(projection)

    const [
    [x0,y0],
    [x1, y1]] = pathGenerator.bounds(sphere)

    const height = y1;


    return (
    <div width={"50vw"} ref={ref} >
    <svg width={dms.width} height={height} style={{backgroundColor:"#ADD8E6"}}>
        <g>
        <path d={pathGenerator(d3.geoGraticule10())} stroke="white"/>
            {countriesShapes.features.map((shape) => {
                return <path 
                key={shape.properties.subunit}
                d={pathGenerator(shape)}
                fill="lime"
                stroke={"black"}
                onClick={(e) => {
                    d3.select(e.target).attr('fill', "red")
                }}
                onMouseEnter={(e) => {
                    d3.select(e.target).attr('fill', "blue")
                }}
                onMouseLeave={(e) => {
                    d3.select(e.target).attr('fill', "pink")
                }}
                /> 
            })}

        </g>
    </svg>
    </div>
    )

}