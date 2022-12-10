import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/atoms/Card/Card';
import { Typography } from './components/atoms/Typography/Typography';

import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
function App() {
  return (
    <ThemeProvider theme={getTheme()}>
    <div className="App">
      <Card backgroundColor={"red"} height="10px" width={"100%"}><Typography align={"left"}> toto</Typography></Card>
      <Typography component={"h1"}>Helo </Typography>
      Ganeshka toolkit
    </div>
    </ThemeProvider>
  );
}

export default App;
