import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import { Rating } from './components/atoms/Rating/Rating.jsx';

function App() {
  return (
    <ThemeProvider theme={getTheme()}>
    <div className="App">
        <Rating precision={0.5} defaultValue={1.5} size="large" emptyLabelText="0 avis" highlightSelectedOnly readOnly/>
        {/* <Rating precision={0.5} size="large" emptyLabelText="0 avis" getlabelText={(value) => { return `${value} Icon ${value !== 1 ? 's' : ''}`; }}/> */}
    </div>
    </ThemeProvider>
  );
}

export default App;
