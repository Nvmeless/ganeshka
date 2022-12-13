import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import CustomThreeGlobalScene from './three/CustomThreeGlobalScene';

function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <div className="App">
        Ganeshka toolkit 
      </div>
      <CustomThreeGlobalScene></CustomThreeGlobalScene>
    </ThemeProvider>
  );
}

export default App;