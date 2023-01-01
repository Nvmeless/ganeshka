import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import Board from './components/playground/Board';


function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      {/* <div className="App">
        Ganeshka toolkit 
      </div> */}
      <Board></Board>
    </ThemeProvider>
  );
}

export default App;