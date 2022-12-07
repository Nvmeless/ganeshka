import {React, useState} from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import { Rating } from './components/atoms/Rating/Rating.jsx';

function App() {

  const [value, setValue] = useState(0)
  const [hover, setHover] = useState(0)

  return (
    <ThemeProvider theme={getTheme()}>
    <div className="App">
        {/* <Rating precision={0.5} defaultValue={1.5} size="large" emptyLabelText="0 avis" highlightSelectedOnly readOnly/> */}
        {/* <Rating value={value} valueActive={hover} precision={0.5} size="large" emptyLabelText="0 avis" onChange={(newValue) => {setValue(newValue);}} onChangeActive={(newHover) => {setHover(newHover);}}/> */}
        <Rating precision={0.5} size="large" emptyLabelText="0 avis" />
    </div>
    </ThemeProvider>
  );
}

export default App;
