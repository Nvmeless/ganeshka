import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import Draggable from 'react-draggable';
import Board from '../src/components/playground/Board'

function Card({ id, description, name }) {
  return (
    <div 
    key={id}
    onMouseEnter={() => {}}>
      <h6>{name}</h6>
      <p>{description}</p>
    </div>
);
}

function Container({}) {
  return (
   
    <div 
    onMouseEnter={() => {}}>
    </div>
);
}







const exempleCurrentTask = [
 {
    name:"Tache",
    description:"Nouvelles Tache",
    id:1
  },
 {
    name:"Tache",
    description:"Nouvelles Tache",
    id:2
  },
  {   name:"Tache",
    description:"Nouvelles Tache",
    id:3
  },

]

function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <div className="App">
        Ganeshka toolkit 


      </div>
      <Board></Board>
    </ThemeProvider>
  );
}

export default App;