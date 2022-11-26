import React from 'react';
import './App.css';
import { TimePicker } from './components/atoms/TimePicker/TimePicker';

function App() {
  return (
    <div className="App">
      <TimePicker label={"Basic Example"} value={"12:25 PM"}/>
    </div>
  );
}

export default App;
