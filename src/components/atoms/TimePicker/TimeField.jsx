import AccessTime from "@mui/icons-material/AccessTime";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { InputContainer } from "./styles";

const TimeField = ({ ...props }) => {
  const [active, setActive] = useState(false);
  const [error, setError] = useState(false);
  const [timeValue, setTimeValue] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("AM");

  useEffect(() => {
    let [timeValue, timeOfDay] = props.value.split(" ");
    setTimeValue(timeValue);
    setTimeOfDay(timeOfDay);
    if (timeValue) {
      setActive(true);
    }
  }, [props.value]);

  const handleFocus = () => {
    setActive(true);
  };

  const handleBlur = () => {
    if (props.value.split(" ")[0] === "") {
      setActive(false);
    }
  };

  const isNumber = (value) => {
    return isNaN(value.replace(":", ""));
  };

  const isValid = (value) => {
    const [hours, minutes] = value.split(":");
    if (hours > 12) {
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

  const handleTimeValueChange = (e) => {
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
      props.onChange(newValue + " " + timeOfDay);
    }
  };

  const handleTimeOfDayChange = (e) => {
    props.onChange(timeValue + " " + e.target.value);
  };

  return (
    <InputContainer active={active} error={active && error}>
      <label>{props.label}</label>
      <input
        placeholder={active ? "hh:mm" : undefined}
        value={timeValue}
        onChange={handleTimeValueChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        maxLength="5"
      />
      <select value={timeOfDay} onChange={handleTimeOfDayChange}>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
      <IconButton onClick={props.toggleShowWindow}>
        <AccessTime />
      </IconButton>
    </InputContainer>
  );
};

export default TimeField;
