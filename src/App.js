import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/atoms/Card/Card';
import { Switch } from './components/atoms/switch/Switch';

global.useState = React.useState

function App() {
  var [toggle, setToggle] = React.useState(false);

  return (
    <div className="App">
      <Switch size='small' label='message' color="#006666" placement="top" checked={toggle} onChange={setToggle}></Switch>
      <Switch label='message' placement="top" checked={toggle} onChange={setToggle}></Switch>
      <Switch size='small' iconUnchecked='🌜' iconChecked='🌞' color="#660066" placement="top"></Switch>
      <Switch labelBefore='off' labelAfter='on' color="#666600" placement="top" defaultChecked></Switch>
    </div>
  );
}

export default App;
