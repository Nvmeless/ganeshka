import React, { useState } from "react";
import "./App.css";
import DateField from "./components/atoms/DateField/DateField";
import DatePicker from "./components/molecules/DatePicker/DatePicker";
import DateRangePicker from "./components/molecules/DateRangePicker/DateRangePicker";
import DateTimeField from "./components/atoms/DateTimeField/DateTimeField";
import { DateTimePicker } from "./components/molecules/DateTimePicker/DateTimePicker";
import TimeField from "./components/atoms/TimeField/TimeField";
import { TimePicker } from "./components/molecules/TimePicker/TimePicker";

function App() {
  const [dates, setDates] = useState([undefined, undefined]);
  const [date, setDate] = useState();
  const [time, setTime] = useState("");
  const [dateTime, setDateTime] = useState("");

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

      <TimePicker
        label={"Basic Example"}
        value={time}
        onChange={(value) => setTime(value)}
        renderInput={(props) => <TimeField {...props} />}
      />

      <DateTimePicker
        label={"DateTimePicker"}
        value={dateTime}
        onChange={(value) => {
          setDateTime(value)
          console.log(value);
        }}
        renderInput={(props) => <DateTimeField {...props} />}
      />
    </div>
  );
}

export default App;
