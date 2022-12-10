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
      {/* Grid 1 */}
      {/* <Grid container style={{ width: '100vw', height: '100vh' }}>
          <Grid item>
            <Grid container direction="row" wrap={"nowrap"}>
              <div style={{ backgroundColor: 'red' }}>1</div>
              <div style={{ backgroundColor: 'lightgray' }}>2</div>
              <div style={{ backgroundColor: 'yellow' }}>3</div>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="row-reverse" columnSpacing={2} wrap={"nowrap"}>
              <div style={{ backgroundColor: 'steelblue' }}>1</div>
              <div style={{ backgroundColor: 'crimson' }}>2</div>
              <div style={{ backgroundColor: 'tan' }}>3</div>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" rowSpacing={2} wrap={"nowrap"}>
              <div style={{ backgroundColor: 'seagreen' }}>1</div>
              <div style={{ backgroundColor: 'salmon' }}>2</div>
              <div style={{ backgroundColor: 'powderblue' }}>3</div>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column-reverse" wrap={"nowrap"}>
              <div style={{ backgroundColor: 'orange' }}>1</div>
              <div style={{ backgroundColor: 'dimgray' }}>2</div>
              <div style={{ backgroundColor: 'navy' }}>3</div>
            </Grid>
          </Grid>
        </Grid> */}
      {/* Grid 2 */}
      <section style={{ width: '80vw', height: '60vh', backgroundColor: 'silver' }}>
        <Grid container direction={'row'} alignItems={'flex-start'} columns={8} spacing={4} columnSpacing={8} rowSpacing={2}>
          <Grid item xs={8} md={6}>
            <div style={{ backgroundColor: 'darkorange' }}>xs: 8 | md: 6</div>
          </Grid>
          <Grid item xs={4} md={6}>
            <div style={{ backgroundColor: 'darkslateblue' }}>xs: 4 | md: 6</div>
          </Grid>
          <Grid item xs={4} md={6}>
            <div style={{ backgroundColor: 'plum' }}>xs: 4 | md: 6</div>
          </Grid>
          <Grid item xs={8} md={6}>
            <div style={{ backgroundColor: 'gold' }}>xs: 8 | md: 6</div>
          </Grid>
        </Grid>
      </section>
      {/* Grid 3 */}
      {/* <Grid container direction={"column"} rowSpacing={2}>
        <Grid xs={12} md={12} spacing={1} wrap={"nowrap"}>
          <Grid item xs={6} md={8}>
            <div style={{ backgroundColor: 'pink' }}>6 / 8</div>
          </Grid>
          <Grid item xs={6} md={4}>
            <div style={{ backgroundColor: 'cyan' }}>6 / 4</div>
          </Grid>
        </Grid>
        <Grid xs={12} md={12} spacing={1} wrap={"nowrap"}>
          <Grid item xs={6} md={4}>
            <div style={{ backgroundColor: 'lightgreen' }}>6 / 4</div>
          </Grid>
          <Grid item xs={6} md={8}>
            <div style={{ backgroundColor: 'darkkhaki' }}>6 / 8</div>
          </Grid>
        </Grid>
      </Grid> */}
    </div >
  );
}

export default App;
