import React from 'react';
import './App.css';
// import { Card } from './components/atoms/Card/Card';
import { Grid } from './components/atoms/Grid/Grid';

function App() {
  return (
    <div className="App">
      {/* <Card backgroundColor={"red"} height="10px" width={"100%"}>Meswsage</Card> */}
      <Grid container style={{ width: '100vw', height: '100vh' }}>
        <Grid item>
          <Grid container direction="row">
            <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
            <div style={{ width: '100%', height: '100%', backgroundColor: 'lightgray' }} />
            <div style={{ width: '100%', height: '100%', backgroundColor: 'yellow' }} />
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row-reverse" columnSpacing={2}>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'steelblue' }} />
            <div style={{ width: '100%', height: '100%', backgroundColor: 'crimson' }} />
            <div style={{ width: '100%', height: '100%', backgroundColor: 'tan' }} />
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" rowSpacing={2}>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'seagreen' }} />
            <div style={{ width: '100%', height: '100%', backgroundColor: 'salmon' }} />
            <div style={{ width: '100%', height: '100%', backgroundColor: 'powderblue' }} />
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column-reverse">
            <div style={{ width: '100%', height: '100%', backgroundColor: 'orange' }} />
            <div style={{ width: '100%', height: '100%', backgroundColor: 'dimgray' }} />
            <div style={{ width: '100%', height: '100%', backgroundColor: 'navy' }} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
