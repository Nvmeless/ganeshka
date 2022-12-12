import React from 'react';
import './App.css';
import {List} from "./components/List.jsx"
import { FiActivity, FiAlertOctagon, FiBriefcase, FiChrome} from "react-icons/fi";

/* Test contenu List */
// const content = [
//   {buttonContent:{id: 1, text: "Bulbizarre", icon:(<FiActivity/>)}, divider: true},
//   {buttonContent:{id: 2, text: "Herbizarre",}, disabled:true},
//   {buttonContent:{id: 3, text: "Florizarre"}, divider: true},
//   {buttonContent:{id: 4, text: "Salamèche", icon:(<FiBriefcase/>)}},
//   {buttonContent:{id: 5, text: "Reptincel", icon:(<FiAlertOctagon/>)}}
// ];

const content = []

function App() {
  return (
    <div className="App">
        <List content={content}/>
    </div>
  );
}

export default App;
