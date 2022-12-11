import {React} from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'

function App() {

  return (
    <ThemeProvider theme={getTheme()}>
    <div className="App">

    </div>
    </ThemeProvider>
  );
}

export default App;
