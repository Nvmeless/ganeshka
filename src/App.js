import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'

function App() {

  return (
    <ThemeProvider theme={getTheme()}>
      <div className="App">
        Ganeshka toolkit 
      </div>
    </ThemeProvider>
  );
}
// primary secondary loading

export default App;