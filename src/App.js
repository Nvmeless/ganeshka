import React from 'react';
import './App.css';
import { Card } from './components/atoms/Card/Card';

function App() {
  return (
    <div className="App">
      <Card backgroundColor={"red"} height="10px" width={"100%"}>Message</Card>
    </div>
  );
}

export default App;
