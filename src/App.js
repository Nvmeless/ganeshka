import React, { useState } from 'react';
import './App.css';
import DatePicker from './components/atoms/DatePicker/DatePicker';

function App() {
  const [date, setDate] = useState();

  return (
    <div className="App" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center',
      paddingTop: '100px',
      height: '100vh',
      gap: '40px',
    }}>
      <p>{date?.toString()}</p>
      <DatePicker
        label="Basic Example"
        width={250}
        value={date}
        onChange={(val) => setDate(new Date(val))}
        renderInput={(params) => <input {...params} />}
      />
    </div>
  );
}

export default App;
