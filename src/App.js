import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/atoms/Card/Card';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import D3Scene from './components/organisms/D3Scene/D3Scene.jsx';
import { Map } from './components/organisms/D3Scene/Map/Map';
function App() {
  fetch('https://api.github.com/users/Nvmeless/repos').then(
  resp => resp.json() // this returns a promise
).then(repos => {
  console.log('REPOS FETCHED')
  for (const repo of repos) {
    // console.log(repo.name);
  }
}).catch(ex => {
  console.error(ex);
})
  return (
    <ThemeProvider theme={getTheme()}>
    <div className="App">
      Ganeshka toolkit
    </div>
    <Map/>
    </ThemeProvider>
  );
}

export default App;
