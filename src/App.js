import React from 'react';
import './App.css';
import { Rating } from './components/atoms/Rating/Rating';

function App() {
  return (
    <div className="App">
      <Rating defaultValue={2} disabled size="small"/>
      <Rating defaultValue={2} readOnly/>
      <Rating defaultValue={2} size="large"/>
      <Rating defaultValue={2} size="large" highlightSelectedOnly/>
    </div>
  );
}

export default App;
