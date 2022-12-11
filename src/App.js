import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { getTheme } from './themes/default.js';
import easterEgg from './components/atoms/Grid/easterEgg';

function App() {
  easterEgg();

  return (
    <ThemeProvider theme={getTheme()}>
      <div className="App">
        Ganeshka toolkit
      </div >
    </ThemeProvider>
  );
}

export default App;
