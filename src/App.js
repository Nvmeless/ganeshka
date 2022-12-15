import "./App.css";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./themes/default.js";
import { Appbar } from "./shared/components/molecules/Appbar/Appbar";
function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <Appbar />
    </ThemeProvider>
  );
}

export default App;
