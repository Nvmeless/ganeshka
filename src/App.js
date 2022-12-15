import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import Map from './components/D3/Map';

function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <Map ></Map>
    </ThemeProvider>
  );
}

export default App;