import React, { useState } from 'react';
import './App.css';
import DateField from './components/atoms/DateField/DateField';
import DatePicker from './components/atoms/DatePicker/DatePicker';
import DateRangePicker from './components/atoms/DateRangePicker/DateRangePicker';

function App() {
  const [dates, setDates] = useState([undefined, undefined]);
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
      <p>{dates?.toString()}</p>
      <DateRangePicker
        value={dates}
        onChange={(val) => setDates(val)}
        renderInput={(start, end) => (
          <>
            <DateField label="Start" {...start} />
            <span>to</span>
            <DateField label="End" {...end} />
          </>
        )}
      />

      <DatePicker
        label="Choose date"
        value={date}
        onChange={(val) => setDate(val)}
        renderInput={(params) => <DateField {...params} />}
      />

      <DateField
        value={date}
        onChange={(val) => setDate(val)}
        label="Date input"
      />
    </div>
  );
}

export default App;
