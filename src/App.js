import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import CustomThreeGlobalScene from './three/CustomThreeGlobalScene';
import DigiCard from './three/DigiCard';

function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <div className="App">
        Ganeshka toolkit 
      </div>
      <CustomThreeGlobalScene>

        <DigiCard></DigiCard>

      </CustomThreeGlobalScene>
    </ThemeProvider>
  );
}

export default App;