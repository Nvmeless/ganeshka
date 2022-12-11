import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { getTheme } from './themes/default.js';
import { Grid } from './components/atoms/Grid/Grid';
import easterEgg from './components/atoms/Grid/easterEgg';

function App() {
  easterEgg();

  return (
    <ThemeProvider theme={getTheme()}>
      <div className="App">
        Ganeshka toolkit
        <section style={{ width: '80vw', height: '60vh', backgroundColor: 'silver' }}>
          <Grid container direction={'row'} alignItems={'flex-start'} columns={8} columnSpacing={8} rowSpacing={2}>
            {/* Nested */}
            <Grid container item direction={'row'} alignItems={'stretch'} columns={12} spacing={4} style={{ backgroundColor: 'lightgray' }} >
              <Grid item xs={8} md={6}>
                <div style={{ backgroundColor: 'darkorange' }}>xs: 8 | md: 6</div>
              </Grid>
              <Grid item xs={4} md={6}>
                <div style={{ backgroundColor: 'darkslateblue' }}>xs: 4 | md: 6</div>
              </Grid>
            </Grid>

            {/* Normal */}
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
      </div >
    </ThemeProvider>
  );
}

export default App;
