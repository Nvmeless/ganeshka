import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./themes/default.js";
import { Appbar } from "./shared/components/molecules/Appbar/Appbar";
function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <div className="App">Parcours Sportifs</div>
      <Appbar></Appbar>
    </ThemeProvider>
  );
}

export default App;
