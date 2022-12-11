import React, { useState } from "react";
import "./App.css";
import TimeField from "./components/atoms/TimePicker/TimeField";
import { TimePicker } from "./components/atoms/TimePicker/TimePicker";

function App() {
  const [time, setTime] = useState("");
  return (
    <div className="App">
      <TimePicker
        label={"Basic Example"}
        value={time}
        onChange={(value) => setTime(value)}
        renderInput={(props) => <TimeField {...props} />}
      />
    </div>
  );
}

export default App;
