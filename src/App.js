import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={getTheme()}>
        {/* Mets ton element que tu dev ICI */}
      </ThemeProvider>
    </div>
  );
}

export default App;
