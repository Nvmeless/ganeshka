import React from 'react';
import './App.css';
import { CircularProgress, CircularProgressWithLabel } from './components/atoms/Progress/Progress';


function App() {
  return (
    <div className="App">
        <CircularProgress color={"green"} varient={"determinate"} value={"progress"}></CircularProgress>
        <CircularProgress color={"green"} varient={"determinate"} value={25}></CircularProgress>
        <CircularProgress color={"red"} ></CircularProgress>
        <CircularProgressWithLabel varient={"determinate"} value={"progress"} interval={10} ></CircularProgressWithLabel>
    </div>
  );
}

export default App;
