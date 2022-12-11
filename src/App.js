import React from 'react';
import './App.css';
import { Card } from './components/atoms/Card/Card';
import { Badge } from './components/molecules/Badge/Badge';

function App() {
  return (
    <div className="App">
      <Card backgroundColor={"red"} height="10px" width={"100%"}>Message</Card>
      <Badge backgroundColor={"#00ff00"} rounded={true} badgeContent={2} width={50} height={50}  />
    </div>
  );
}

export default App;
