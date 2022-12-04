import React from 'react';
import './App.css';
import { CircularProgress } from './components/atoms/Progress/Progress';


function App() {
  return (
    <div className="App">
        <CircularProgress color={"green"} varient={"determinate"} value={50}></CircularProgress>
        <CircularProgress color={"blue"} ></CircularProgress>
    </div>
  );
}

export default App;
