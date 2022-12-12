import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Card } from './components/atoms/Card/Card';
import { TextField } from './components/atoms/text_field/input';

function App() {
  return (
    <div className="App">
      <Card backgroundColor={"red"} height="10px" width={"100%"}>Mon formulaire</Card>
      
      <TextField height="10px" width="100%" />

    </div>
  );
}

export default App;
