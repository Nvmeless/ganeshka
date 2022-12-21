import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./themes/default.js";
import { RouterProvider } from "react-router-dom";
import { router } from "../src/router/routes";
import { Provider } from 'react-redux';
import {store} from './store/index'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={getTheme()}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
