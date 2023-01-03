import "./App.css";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./themes/default.js";
import { BrowserRouter } from "react-router-dom";
import { Appbar } from "./shared/components/molecules/Appbar/Appbar";
import { Routing } from "./shared/router/Routing";
import { Provider } from "react-redux";
import { store } from "./shared/stores/store"

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={getTheme()}>
        <BrowserRouter>
          <Appbar role="professor" />
          <Routing />
          <div className="appbar_space"></div>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
