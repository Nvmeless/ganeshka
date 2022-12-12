import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Card } from './components/atoms/Card/Card';
import { TextField } from './components/atoms/text_field/input';

import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
function App() {
  return (
    <ThemeProvider theme={getTheme()}>
    <div className="App">
      <Card backgroundColor={"red"} height="10px" width={"100%"}>Mon formulaire</Card>
      
      <TextField height="10px" width="100%" />

      Ganeshka toolkit
    </div>
    </ThemeProvider>
  );
}

export default App;
