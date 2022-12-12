import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
<<<<<<< HEAD
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
=======
>>>>>>> caa5ec0b615c52103c578af598937051dff6ba42

function App() {

  return (
    <ThemeProvider theme={getTheme()}>
<<<<<<< HEAD
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
=======
      <div className="App">
        Ganeshka toolkit 
      </div>
>>>>>>> caa5ec0b615c52103c578af598937051dff6ba42
    </ThemeProvider>
  );
}
// primary secondary loading

export default App;