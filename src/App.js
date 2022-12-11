import React from "react";
import "./App.css";
import { Slider } from "./components/atoms/Slider/Slider";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./themes/default.js";
function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <div className="App">Ganeshka toolkit</div>
      <Slider></Slider>
    </ThemeProvider>
  );
}

export default App;
