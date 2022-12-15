import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import Draggable from 'react-draggable';


function Card({ currentTask, tasks, addTask }) {
  return (
    <Draggable grid={[10, 10]} axis='y' bounds='parent'>
      <div className='card' key={currentTask.id}>
        <div className='heading'>
          <h3>{currentTask.name && currentTask.name}</h3>
          <img
            onClick={() => {
              // const newTaskList = tasks.filter((item) => {
              //   if (item.id != currentTask.id) {
              //     return item;
              //   }
              // });
              // addTask(newTaskList);
            }}
            src='https://toppng.com/uploads/preview/recycling-bin-vector-delete-icon-png-black-11563002079w1isxqyyiv.png'
            style={{ height: "20px", width: "20px" }}
          />
        </div>
        <p>{currentTask.description}</p>
      </div>
    </Draggable>
  );
}





const exempleCurrentTask = [
  {currentTask:{
    name:"Tache",
    description:"Nouvelles Tache",
    id:1
  }},
  {currentTask:{
    name:"Tache",
    description:"Nouvelles Tache",
    id:2
  }},
  {currentTask:{
    name:"Tache",
    description:"Nouvelles Tache",
    id:3
  }},

]

function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <div className="App">
        <Draggable axis='x'>
          <div className="box">Hello World</div>
        </Draggable>
        Ganeshka toolkit 
        {exempleCurrentTask.map((x) => <Card {...x}/>)}

      </div>
    </ThemeProvider>
  );
}

export default App;