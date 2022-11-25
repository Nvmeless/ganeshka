import React from 'react';
import './App.css';
// import { Card } from './components/atoms/Card/Card';
import { Grid } from './components/atoms/Grid/Grid';
import easterEgg from './components/atoms/Grid/easterEgg';

function App() {
  easterEgg();

  return (
    <div className="App">
      {/* <Card backgroundColor={"red"} height="10px" width={"100%"}>Meswsage</Card> */}
      <Grid container style={{ width: '100vw', height: '100vh' }}>
        <Grid item wrap={"nowrap"}>
          <Grid container direction="row">
            <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }}>1</div>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'lightgray' }}>2</div>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'yellow' }}>3</div>
          </Grid>
        </Grid>
        <Grid item wrap={"nowrap"}>
          <Grid container direction="row-reverse" columnSpacing={2}>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'steelblue' }}>1</div>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'crimson' }}>2</div>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'tan' }}>3</div>
          </Grid>
        </Grid>
        <Grid item wrap={"nowrap"}>
          <Grid container direction="column" rowSpacing={2}>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'seagreen' }}>1</div>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'salmon' }}>2</div>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'powderblue' }}>3</div>
          </Grid>
        </Grid>
        <Grid item wrap={"nowrap"}>
          <Grid container direction="column-reverse">
            <div style={{ width: '100%', height: '100%', backgroundColor: 'orange' }}>1</div>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'dimgray' }}>2</div>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'navy' }}>3</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction={"column"} rowSpacing={2}>
        <Grid xs={12} md={12} spacing={1}>
          <Grid item xs={6} md={8}>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'pink' }}>6 / 8</div>
          </Grid>
          <Grid item xs={6} md={4}>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'cyan' }}>6 / 4</div>
          </Grid>
        </Grid>
        <Grid xs={12} md={12} spacing={1}>
          <Grid item xs={6} md={4}>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'lightgreen' }}>6 / 4</div>
          </Grid>
          <Grid item xs={6} md={8}>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'darkkhaki' }}>6 / 8</div>
          </Grid>
        </Grid>
      </Grid>
    </div >
  );
}

export default App;
