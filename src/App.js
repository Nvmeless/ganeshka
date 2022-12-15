import React from 'react';
import './App.css';
// import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import  CreatePost  from './pages/CreatePost/CreatePost';
import { Provider } from 'react-redux';
import store from './store/store'
import  Login  from './pages/Login/Login';
import Register from './pages/Register/Register';
import { Navbar } from './components/atoms/Navbar/Navbar';
import { ThemeProvider } from "@mui/material/styles";
import createTheme from './themes/default.js'

function App() {

  return (
      <Provider store={store} >
        <ThemeProvider theme={createTheme}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createPost" element={<CreatePost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        </ThemeProvider>
      </Provider>

  );
}
// primary secondary loading

export default App;
