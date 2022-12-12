import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/atoms/Card/Card';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Provider } from 'react-redux';
import {store} from './store/store'

function App() {

  return (
      <Provider store={store} >
        <ThemeProvider theme={getTheme()}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        </ThemeProvider>
      </Provider>
  );
}
// primary secondary loading

export default App;
