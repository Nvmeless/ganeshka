import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/atoms/Card/Card';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import SpeedDialIcon from "./components/atoms/SpeedDialIcon/SpeedDialIcon";
import SpeedDialAction from "./components/atoms/SpeedDialAction/SpeedDialAction";
import SpeedDial from "./components/molecules/SpeedDial/SpeedDial"
import { FaBeer,FaAccessibleIcon,Fa500Px,FaAcquisitionsIncorporated } from 'react-icons/fa';


const actions = [
  { icon: <FaBeer />, name: 'Copy' },
  { icon: <FaAccessibleIcon />, name: 'Save' },
  { icon: <Fa500Px />, name: 'Print' },
  { icon: <FaAcquisitionsIncorporated />, name: 'Share' },
];

function App() {

  return (
    <ThemeProvider theme={getTheme()}>
    <div className="App">
      Ganeshka toolkit
      <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
            <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                tooltipPlacement={"left"}
            />
        ))}
      </SpeedDial>
    </div>
    </ThemeProvider>
  );
}
// primary secondary loading

export default App;
