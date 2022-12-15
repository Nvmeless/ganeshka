import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from '../src/router/routes'

function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
