import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from '../src/shared/router/routes'
import { Appbar } from "./shared/components/molecules/Appbar/Appbar";
import { Provider } from 'react-redux';
import {store} from './store/index'

function App() {
  return (
    <Provider store={store}>
    <ThemeProvider theme={getTheme()}>
      <Appbar />
      <RouterProvider router={router} />
    </ThemeProvider>
    </Provider>
  );
}

export default App;
