import React from 'react';
import './App.css';
import { Card } from './components/atoms/Card/Card';
import { Avatar } from './components/atoms/Avatar/Avatar';


function App() {
  return (
    <div className="App">
      {/*<Card backgroundColor={"red"} height="10px" width={"100%"}>Meswsage</Card>*/}
      <Avatar><img src="./logo512.png"/></Avatar>
      <Avatar>Julien Guilet</Avatar>
      <Avatar>A</Avatar>
      <Avatar></Avatar>
    </div>
  );
}

export default App;
