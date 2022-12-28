import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./themes/default.js";
import { RouterProvider } from "react-router-dom";
import { router } from "../src/shared/router/routes";
import { Appbar } from "./shared/components/molecules/Appbar/Appbar";
import { useRefreshConnectedUser } from "./authentication/login/hooks/useRefreshConnectedUser"
import { Provider } from "react-redux";
import { store } from "./shared/stores/index";

function App() {
  useRefreshConnectedUser()

  return (
    <Provider store={store}>
      <ThemeProvider theme={getTheme()}>
        <RouterProvider router={router} />
        <Appbar />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
