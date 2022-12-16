import React, {useState, useEffect} from 'react';
import { useRef } from 'react';

function Card({ id, description, name,refs, ...props }) {

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

function Container({onDragEnter,...props}) {


  return (
   
    <div style={{
        backgroundColor: "red",
        padding: 20
    }}
    onDragEnter={onDragEnter}
  >
        {props.children}
    </div>
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
    
    {exempleCurrentTask.map((x) => <Card key={x.id} onDragEnter={(e) => dragEnter(e, x.id)} onDragEnd={drop} onDragStart={(e) => dragStart(e, x.id)} {...x} />)}
    </>


    );
}

export default Board;