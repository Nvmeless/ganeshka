import React from 'react';
import './App.css';
import { Card } from './components/atoms/Card/Card';
import { Badge } from './components/atoms/Badge/Badge';
import Icon from './components/atoms/Icon/Icon'

function App() {
  return (
    <div className="App">
      <Card backgroundColor={"red"} height="10px" width={"100%"}>Message</Card>
      <Badge backgroundColor={"#FFFFFF"} rounded={true} badgeContent={2} width={50} height={50}>
        <Icon icon={"Bs/BsFillAlarmFill"} size={50} color={"black"} />
        {/* test */}
      </Badge>
    </div>
  );
}

export default App;
