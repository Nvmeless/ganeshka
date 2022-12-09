import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/atoms/Card/Card';
import { Tab } from './components/atoms/Tab/Tab';
import { Container } from './components/atoms/Container/Container';
import { FaAmazon } from "react-icons/fa";

import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
function App() {
  return (
    <ThemeProvider theme={getTheme()}>
    <div className="App">
      <Card backgroundColor={"red"} height="10px" width={"100%"}>Meswsage</Card>
      <Container>

        <Tab label={"Item One"} value={"1"}/>
        <Tab label={"Item One"} value={"1"} icon={"icon"} iconPosition={'bottom'}/>
        <Tab label={"Item One"} value={"1"} icon={"icon"}/>
      </Container>
    </div>
    </ThemeProvider>
  );
}

export default App;
