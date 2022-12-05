import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/atoms/Card/Card';
import { Typography } from './components/atoms/Typography/Typography';

function App() {
  return (
    <div className="App">
      <Card backgroundColor={"red"} height="10px" width={"100%"}><Typography align={"left"}> toto</Typography></Card>
      
    </div>
  );
}

export default App;
