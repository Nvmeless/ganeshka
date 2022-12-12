import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/atoms/Card/Card';
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

export default App;
