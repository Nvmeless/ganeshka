import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import D3Scene from './components/D3/D3Scene';

function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <D3Scene></D3Scene>
    </ThemeProvider>
  );
}

export default App;