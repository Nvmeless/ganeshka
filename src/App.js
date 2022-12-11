import React from 'react';
import './App.css';
import { Card } from './components/atoms/Card/Card';
import { Avatar } from './components/atoms/Avatar/Avatar';
import {CiAlarmOn} from "react-icons/ci"
 

function App() {
  return (
    <div className="App">
      {/*<Card backgroundColor={"red"} height="10px" width={"100%"}>Meswsage</Card>*/}
      <div><Avatar src="./logo512.png"></Avatar>
      <Avatar size={100} borderRadius={10} textColor={'white'} bgColor={"red"}>Julien Guilet</Avatar>
      <Avatar size={20}>bonour</Avatar>
      <Avatar size={25} >Alex Thibeaud</Avatar>
      <Avatar size={30} borderRadius={10}></Avatar>
      <Avatar size={30} bgColor={"green"} borderRadius={10}>Max Wacquier</Avatar></div>
    </div>
  );
}

export default App;
