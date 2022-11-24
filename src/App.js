import React from 'react';
import './App.css';
import DatePicker from './components/atoms/DatePicker/DatePicker';

function App() {
  return (
    <div className="App" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <DatePicker label="Basic Example" width={250} />
    </div>
  );
}

export default App;
