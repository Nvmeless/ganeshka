import React from 'react';
import './App.css';
import { Card } from './components/atoms/Card/Card';
import { Avatar } from './components/atoms/Avatar/Avatar';
import {CiAlarmOn} from "react-icons/ci"
 

function App() {
  return (
    <div className="App">
      {/*<Card backgroundColor={"red"} height="10px" width={"100%"}>Meswsage</Card>*/}
      <Avatar src="./logo512.png"></Avatar>
      <Avatar size={100}>Julien Guilet</Avatar>
      <Avatar size={20}>bonour</Avatar>
      <Avatar size={10}>Alex Thibeaud</Avatar>
      <Avatar size={30}></Avatar>
    </div>
  );
}

export default App;
