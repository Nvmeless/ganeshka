import styled from 'styled-components';
import { useState, useRef } from 'react';
import Draggable from "react-draggable";

const StyleBoard = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
    `

const StyleToolBox = styled.div`
    height: 100%;
    width: 40vw;
    background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
    `

const StyleDisplay = styled.div`
    height: 100%;
    width: 50vw;
    background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
    `

const StyleComponent = styled.div`
    height: 10vh;
    width: 95%;
    background-color: #f5f5f5;
    margin-top:1vh ;
    `

export default function Board() {
    const [componentsList, setComponenntList] = useState([{
        id: 1,
        name: "Super component",
        whereItIs: "toolbox"
    },
        {
            id: 1,
            name: "Super component",
            whereItIs: "display"
        }]);

    const draggedComponent = useRef();
    const draggablesOnComponent = useRef();
    const onComponentDragStart = (e, elt) => {
        draggedComponent.current = elt;
    }
    const onListDragOn = (e, elt) => {
        draggablesOnComponent.current = elt;
    }
    const executeDragable = (e) => {
        const copyList = [...componentsList];
        const indexDragged = copyList.findIndex((item) => item.id === draggedComponent.current.id);
        copyList[indexDragged].whereItIs = draggablesOnComponent.current
    }

    const renderComponents = (elts) => {
        return elts.map((x) => {
            return <Draggable  key={x.id}
                onStart={ (e) => onComponentDragStart(e, x)}
            >
                <StyleComponent><h3>{x.name}</h3></StyleComponent>
            </Draggable>
        })
    }
    return (
        <StyleBoard>
            <StyleToolBox onDragOver={(e) => onListDragOn(e,'toolkit')}>
                <StyleComponent></StyleComponent>
                {renderComponents(componentsList.filter((x) => x.whereItIs === "toolbox"))}
            </StyleToolBox>
            <StyleDisplay
                onDragEnd={(e) => {}}
                onDragOver={(e) => onListDragOn(e,'toolkit')}>
                {renderComponents(componentsList.filter((x) => x.whereItIs === "display"))}
            </StyleDisplay>
        </StyleBoard>
    )
}
