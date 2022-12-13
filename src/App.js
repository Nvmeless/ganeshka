import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import CardBanner from './components/molecules/CardBanner';
import Website from './components/pages/Website';

function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <Website entry="3D"></Website>
    </ThemeProvider>
  );
}

export default App;