import React from "react";
import '../../App.css';
import {ButtonAppBar} from '../molecules/AppBarCustom/AppBarCustom';
import { ThemeProvider } from 'styled-components';
import {getTheme} from '../../themes/default.js';

export const Home = () => {
    return (
        <ThemeProvider theme={getTheme()}>
        <div className="App">
          Ganeshka toolkit
        </div>
        <ButtonAppBar></ButtonAppBar>
        </ThemeProvider>
      );
}
