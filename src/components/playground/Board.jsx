import React, {useState, useEffect} from 'react';
import { useRef } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';



const StyleCol= styled.div`
display:flex;
flex-direction column;
align-items: center;
justify-content:center;
`
const StyleRow= styled.div`
display:flex;
flex-direction: row;
height:${props => props.height }
`


const StylSquare= styled.span`
background-color:blue;
position: relative;
z-index:20;
top: 20px;
height:${props => props.active ? props.activeSize : props.size};
width:${props => props.active ? props.activeSize : props.size};
`


const StyledGrid = styled.div`
display:flex;
justify-content:space-around;
`



function Card({ id, description, name,myRef, ...props }) {

    const mRf = useRef(props.ref)
    console.log("REF", mRf)
    useEffect(() => {
        mRf.current = 'Hey'
    }, [])
  return (
    <div 
    style={{
        backgroundColor: 'rgba(0,0,0,.5)',
    }}
    key={id}
    draggable
    {...props}
    >
      <h6>{name}</h6>
      <p>{description}</p>
    </div>
);
}

function Container({onDragEnter, ref,...props}) {
    const Sizer = (props) => {
        return active ? <Draggable {...props}><StylSquare size="25px"></StylSquare></Draggable> : null 
    } 
    const [active, setActive] = useState(false);



    const childrenRef = useRef([]);

    useEffect(() => {
      console.log("Form Children", childrenRef.current);
    }, [childrenRef]);
    
    
    const elementList = React.Children.map(props.children, (child, index) =>
        React.cloneElement(child, {
          ref: (ref) => (childrenRef.current[index] = ref)
        })
      )
    
  return (
   
    <StyleCol style={{

        
    }}
  >
    <StyleRow><Sizer axis='y'  onStart={(x) => {console.log(x)}}/></StyleRow>

    <StyleRow><Sizer axis='x' /><div onClick={() => {setActive(!active)}}>{elementList}</div><Sizer axis='x' /></StyleRow>
    <StyleRow><Sizer axis='y'/></StyleRow>
    </StyleCol>
);
}





function Board() {


    const [exempleCurrentTask,setExempleCurrentTask]= useState([
        {
           name:" 0Tache",
           description:"Nouvelles Tache",
           id:0
         },
        {
           name:"1Tache",
           description:"Nouvelles Tache dddd",
           id:1
         },
         {   
            name:" 2Tache",
           description:"Nouvelles Tache",
           id:2
         },
         {   
            name:" 3 Tache",
           description:"Nouvelles Tache",
           id:3
         },
       ])
       
    const dragItem = useRef()
    const dragOverItem = useRef();
    const dragStart = (e, position) => {
        dragItem.current = position;
      };
      const dragEnter = (e, position) => {
        dragOverItem.current = position;
      };

      const drop = (e) => {
        const copyExempleCurrentTask = [...exempleCurrentTask];
        const dragItemContent = copyExempleCurrentTask[copyExempleCurrentTask.findIndex((x ) => { 
            return dragItem.current == x.id })];

        copyExempleCurrentTask.splice(copyExempleCurrentTask.findIndex((x) => { return dragItem.current == x.id}), 1);
        copyExempleCurrentTask.splice(copyExempleCurrentTask.findIndex((x) => { return dragOverItem.current == x.id}), 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setExempleCurrentTask(copyExempleCurrentTask);
      };
      useEffect(() => {
        setExempleCurrentTask(exempleCurrentTask);
        return () => {
            dragItem.current = null;
            dragOverItem.current = null;
        };
      }, [dragOverItem, dragItem]);



  return (
    <>
    <StyledGrid>
    {exempleCurrentTask.map((x) =><Container  key={x.id} ><Card key={x.id} onDragEnter={(e) => dragEnter(e, x.id)} onDragEnd={drop} onDragStart={(e) => dragStart(e, x.id)} {...x} /></Container>)}
    </StyledGrid>
    </>


    );
}

export default Board;