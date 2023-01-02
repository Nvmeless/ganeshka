import "./App.css";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./themes/default.js";
import { BrowserRouter } from "react-router-dom";
import { Appbar } from "./shared/components/molecules/Appbar/Appbar";
import { useRefreshConnectedUser } from "./authentication/login/hooks/useRefreshConnectedUser"
import { Routing } from "./shared/components/molecules/Routing/Routing";
import { Provider } from "react-redux";
import { store } from "./shared/stores/index";

function App() {
  useRefreshConnectedUser()

  return (
    <Provider store={store}>
      <ThemeProvider theme={getTheme()}>
        <BrowserRouter>
          <Appbar role="professor" />
          <Routing />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
