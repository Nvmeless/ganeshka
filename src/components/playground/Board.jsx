import {useState, useRef} from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';

const StyledBoard = styled.div`
height: 100vh;
width: 100vw;
background-color: rgba(0,0,0,.1);
display:flex;
justify-content:space-between;

`
const StyledToolbox = styled.div`
height: 100%;
width: 40vw;
background-color: rgba(0,0,0,.1);
`
const StyledDisplay = styled.div`
height: 100%;
width: 50vw;
background-color: rgba(0,0,0,.1);
`
const StyledComponent = styled.div`
height: 10vh;
width: 95%;
background-color: rgba(0,0,0,.1);
margin-top:1vh;
`

export default function Board() {
    const [componentsList, setComponentList] = useState([
        {
            id:1,
            name:"Super Composant",
            whereItIs:"toolbox",
        },
        {
            id:2,
            name:"Super Composant Displayed",
            whereItIs:"display",
        }
    ])


    const draggedComponent = useRef();
    const draggedOnComponent = useRef();
    const onComponentDragStart =  (e, elt) => {
        draggedComponent.current = elt;
    }
    const onListDragOn =  (e, elt) => {
        draggedOnComponent.current = elt;
    }

    const renderComponent = (elts) => { 
        return elts.map((x) => {
            return (

                <StyledComponent
            key={x.id}
                draggable
                onDragStart={(e) => onComponentDragStart(e, x)}
                >
                    <h6>{x.name}</h6>
                </StyledComponent>
          )
        })
    }

    const executeDraggable = (e) => {
        const copyList = [...componentsList];
        
        const index = componentsList.findIndex((x) => {
            return draggedComponent.current.id === x.id
        })


        console.log(index)
        copyList[index].whereItIs = draggedOnComponent.current
        setComponentList( copyList);
    } 

    return (<>
    <StyledBoard>
            <StyledToolbox
            onDragEnd={(e) => executeDraggable(e)}
            
            onDragOver={(e) => onListDragOn(e,'toolbox')}>
            { renderComponent(componentsList.filter((x) => { return x.whereItIs === 'toolbox'}))}
            </StyledToolbox>
        <StyledDisplay 
        
        onDragEnd={(e) => executeDraggable(e)}
        
        onDragOver={(e) => onListDragOn(e,'display')} >
            { renderComponent(componentsList.filter((x) => { return x.whereItIs === 'display'}))}
            </StyledDisplay>
    </StyledBoard></>)
}