import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import Board from './components/playground/Board';
import refreshTokenInterceptor from "./config/refreshTokenInterceptor";
import store from "./store/store";
import { Provider } from 'react-redux';


function App() {

    refreshTokenInterceptor(store);
  return (
      <Provider store={store} >
        <ThemeProvider theme={getTheme()}>
          {/* <div className="App">
            Ganeshka toolkit
          </div> */}
          <Board></Board>
        </ThemeProvider>
      </Provider>
  );
}

export default App;
