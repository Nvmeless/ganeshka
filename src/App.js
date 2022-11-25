import React from 'react';
import './App.css';
import { Card } from './components/atoms/Card/Card';
import { Badge } from './components/molecules/Badge/Badge';

function App() {
  return (
    <div className="App">
      <Card backgroundColor={"red"} height="10px" width={"100%"}>Message</Card>
      <Badge/>
    </div>
  );
}

export default App;
