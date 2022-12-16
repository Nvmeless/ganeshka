import "./App.css";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./themes/default.js";
import { BrowserRouter } from "react-router-dom";
import { Appbar } from "./shared/components/molecules/Appbar/Appbar";
import { Routing } from "./shared/components/molecules/Routing/Routing";

function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <BrowserRouter>
        <Appbar role="professor" />
        <Routing />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
