import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/atoms/Card/Card';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import SpeedDialIcon from "./components/atoms/SpeedDialIcon/SpeedDialIcon";
import SpeedDialAction from "./components/atoms/SpeedDialAction/SpeedDialAction";
import SpeedDial from "./components/molecules/SpeedDial/SpeedDial"
import { FaBeer,FaAccessibleIcon } from 'react-icons/fa';


function App() {
  return (
    <ThemeProvider theme={getTheme()}>
    <div className="App">
      Ganeshka toolkit
      <SpeedDialIcon icon={<FaBeer></FaBeer>} openIcon={<FaAccessibleIcon></FaAccessibleIcon>}> </SpeedDialIcon>
      <SpeedDialIcon > </SpeedDialIcon>
      <SpeedDialAction></SpeedDialAction>
      <SpeedDial>

        <SpeedDialAction></SpeedDialAction>
        <SpeedDialAction></SpeedDialAction>
        <SpeedDialAction></SpeedDialAction>
        <SpeedDialAction></SpeedDialAction>

      </SpeedDial>
    </div>
    </ThemeProvider>
  );
}
// primary secondary loading

export default App;
