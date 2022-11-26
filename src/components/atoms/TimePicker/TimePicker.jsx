import React, { useEffect, useRef, useState } from "react";
import PropTypes, { string } from "prop-types";
import {
  ClockButtonContainer,
  ClockContainer,
  ClockItem,
  ClockPageControls,
  ClockPointer,
  ClockTimePickerWindow,
  InputContainer,
} from "./styles.js";
import IconButton from "@mui/material/IconButton";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button } from "@mui/material";

const hours = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
const minutes = [
  "00",
  "",
  "",
  "",
  "",
  "05",
  "",
  "",
  "",
  "",
  "10",
  "",
  "",
  "",
  "",
  "15",
  "",
  "",
  "",
  "",
  "20",
  "",
  "",
  "",
  "",
  "25",
  "",
  "",
  "",
  "",
  "30",
  "",
  "",
  "",
  "",
  "35",
  "",
  "",
  "",
  "",
  "40",
  "",
  "",
  "",
  "",
  "45",
  "",
  "",
  "",
  "",
  "50",
  "",
  "",
  "",
  "",
  "55",
  "",
  "",
  "",
  "",
];

export const TimePicker = ({ label, value, onChange, ...props }) => {
  const [timeValue, setTimeValue] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("AM");
  const [hourSelected, setHourSelected] = useState("");
  const [minuteSelected, setMinuteSelected] = useState("");
  const [error, setError] = useState(false);
  const [active, setActive] = useState(false);
  const [showWindow, setShowWindow] = useState(false);
  const [windowPage, setWindowPage] = useState(1);
  const inputRef = useRef(null);

  const toggleShowWindow = () => setShowWindow(!showWindow);

  const isNumber = (value) => {
    return isNaN(value.replace(":", ""));
  };

  const isValid = (value) => {
    const [hours, minutes] = value.split(":");
    if (hours > 12) {
      console.log("hours too high");
      return setError(true);
    }

    if (minutes > 59) {
      return setError(true);
    }

    if (value.length > 0 && value.length < 5) {
      return setError(true);
    }

    return setError(false);
  };

  const handleChange = (e) => {
    let newValue = e.target.value;
    const lastCharacter = newValue.charAt(newValue.length - 1);
    if (lastCharacter === ":") {
      newValue = newValue.replace(":", "");
    }

    if (isNumber(newValue)) {
      return false;
    }

    isValid(newValue);

    if (newValue.length === 2 && !timeValue.includes(":")) {
      newValue =
        newValue.slice(0, 2) + ":" + newValue.slice(2, newValue.length);
    }

    if (newValue.length <= 5) {
      setTimeValue(newValue);
      onChange(newValue + " " + timeOfDay);
    }
  };

  const handleFocus = () => {
    setActive(true);
  };

  const handleBlur = () => {
    if (timeValue === "") {
      setActive(false);
    }
  };

  const formatHour = (hour) => {
    if (hour.length === 1) {
      return "0" + hour;
    }

    return hour;
  };

  const handleClickHour = (hour, index) => {
    const newTimeValue = `${formatHour(hour)}:${timeValue.split(":")[1]}`;
    setTimeValue(newTimeValue);
  };

  const handleClickMinute = (minute, index) => {
    const newTimeValue = `${timeValue.split(":")[0]}:${minute}`;
    setTimeValue(newTimeValue);
  };

  useEffect(() => {
    const timeRegex = /^([0-1]?[0-2]):[0-5][0-9]\s(AM|PM)$/;
    if (timeRegex.test(value)) {
      let [timeValue, timeOfDay] = value.split(" ");
      setTimeValue(timeValue);
      setTimeOfDay(timeOfDay);
      setActive(true);
    }
  }, [value]);

  useEffect(() => {
    const selectedHourIndex = hours.findIndex(
      (e) => parseInt(e) === parseInt(timeValue.split(":")[0])
    );
    const selectedMinuteIndex = minutes.findIndex(
      (e) => parseInt(e) === parseInt(timeValue.split(":")[1])
    );

    setHourSelected(selectedHourIndex);
    setMinuteSelected(selectedMinuteIndex);
    console.log(selectedMinuteIndex);
  }, [timeValue]);

  return (
    <InputContainer active={active} error={active && error}>
      <label>{label}</label>
      <input
        placeholder={active ? "hh:mm" : undefined}
        value={timeValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputRef}
        maxLength="5"
      />
      <select value={timeOfDay} onChange={(e) => setTimeOfDay(e.target.value)}>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
      <IconButton onClick={toggleShowWindow}>
        <AccessTimeIcon />
      </IconButton>
      {showWindow && (
        <ClockTimePickerWindow>
          <ClockContainer>
            <ClockPointer selected={windowPage === 1 ? hourSelected : minuteSelected}>
              <div className="base"></div>
              <div className="line"></div>
              <div className="thumb"></div>
            </ClockPointer>
            {windowPage === 1 &&
              hours.map((hour, index) => {
                return (
                  <ClockItem
                    key={"hour" + hour}
                    onClick={() => handleClickHour(hour, index)}
                  >
                    {hour}
                  </ClockItem>
                );
              })}
            {windowPage === 2 &&
              minutes.map((minute, index) => {
                return (
                  <ClockItem
                    key={"minute" + minute}
                    onClick={() => handleClickMinute(minute, index)}
                  >
                    {minute}
                  </ClockItem>
                );
              })}
          </ClockContainer>
          <ClockButtonContainer left selected={timeOfDay === "AM"}>
            <Button onClick={() => setTimeOfDay("AM")}>AM</Button>
          </ClockButtonContainer>
          <ClockButtonContainer right selected={timeOfDay === "PM"}>
            <Button onClick={() => setTimeOfDay("PM")}>PM</Button>
          </ClockButtonContainer>
          <ClockPageControls>
            <IconButton
              disabled={windowPage === 1}
              onClick={() => setWindowPage(windowPage - 1)}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              disabled={windowPage === 2}
              onClick={() => setWindowPage(windowPage + 1)}
            >
              <ChevronRightIcon />
            </IconButton>
          </ClockPageControls>
        </ClockTimePickerWindow>
      )}
    </InputContainer>
  );
};

TimePicker.propTypes = {};

TimePicker.defaultProps = {};
