import React from 'react';
import './App.css';
import { Card } from './components/atoms/Card/Card';
import { Grid } from './components/atoms/Grid/Grid';

function App() {
  return (
    <div className="App">
      <Card backgroundColor={"red"} height="10px" width={"100%"}>Meswsage</Card>
      {/* import grid */}
      <Grid columns={3} rows={3} gap={10} />
    </div>
  );
}

export default App;
