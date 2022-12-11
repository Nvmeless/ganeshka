import React from 'react';
import './App.css';
import {Select} from './components/atoms/Select/Select'
import {MenuItem} from './components/atoms/MenuItem/MenuItem'

function App() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="App">
      <Select 
        id="demo-simple-select"
        labelId="demo-simple-select-label"
        value = {age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </div>
  );
}

export default App;
