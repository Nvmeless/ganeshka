import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/atoms/Card/Card';
import { ToolTip } from './components/atoms/ToolTip/ToolTip';

function App() {
  return (
    <div className="App">
      <ToolTip >aaaaaaaa</ToolTip>
      <Card backgroundColor={"red"} height="10px" width={"100%"}>Meswsage</Card>
      
    </div>
  );
}

export default App;
