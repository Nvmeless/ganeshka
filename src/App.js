import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'

import { useFocusabilityState } from 'webrix/hooks';
import Website from './components/pages/Website'
function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <div className="App">
        Ganeshka toolkit 
      </div>
      <Website></Website>

    </ThemeProvider>
  );
}

export default App;