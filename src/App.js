import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import {FirstTry} from './components/pages/FirstTry';

function App() {
  return (
    <div className="App">

      <ThemeProvider theme={getTheme()}>

        <FirstTry></FirstTry>
        
      </ThemeProvider>
    </div>
  );
}

export default App;
