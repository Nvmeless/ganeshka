import React from 'react';
import './App.css';
import { Rating } from './components/atoms/Rating/Rating';

function App() {
  return (
    <div className="App">
      <Rating defaultValue={2.5} size="large" precision={0.5}/>
    </div>
  );
}

export default App;
