import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import Board from './components/playground/Board';


import addNotification from 'react-push-notification';

function App() {
const [color, setColor] = useState('green');

const clickToNotify = () => {

  setColor('blue')
  addNotification({
    title:'Hello',
    message:'Vous savez utiliser le systeme de nitification',
    duration: 3000,
    icon: logo,
    native: true,
    onClick: () => window.location = 'http://localhost:3000'
  })
}

  return (
    <ThemeProvider theme={getTheme()}>
      <div onClick={clickToNotify} style={{
        background:color
      }}>
        Hey
        </div> 
    </ThemeProvider>
  );
}

export default App;