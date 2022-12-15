import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from '../src/router/routes'
import { Appbar } from "./shared/components/molecules/Appbar/Appbar";

function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <Appbar />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
