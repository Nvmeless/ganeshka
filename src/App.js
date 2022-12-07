import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/atoms/Card/Card';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import D3Scene from './components/organisms/D3Scene/D3Scene.jsx';
function App() {
  return (
    <ThemeProvider theme={getTheme()}>
    <div className="App">
      Ganeshka toolkit
    </div>
    <D3Scene></D3Scene>
    </ThemeProvider>
  );
}

export default App;
