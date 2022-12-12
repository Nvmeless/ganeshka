import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container } from "@mui/system";
import Clock from "../../atoms/Clock/Clock.jsx";
import { DateTimePickerWindow } from "./styles.js";
import Calendar from "../../atoms/Calendar/Calendar.jsx";
import dayjs from "dayjs";

export const DateTimePicker = (props) => {
  const [showWindow, setShowWindow] = useState(false);

  const toggleShowWindow = () => {
    setShowWindow(!showWindow);
  };

  useEffect(() => {
    console.log(props.value);
  }, [props.value]);

  return (
    <Container style={{ position: "relative", width: "fit-content" }}>
      {props.renderInput({ ...props, onClick: toggleShowWindow })}
      {showWindow && (
        <CalendarClockPicker
          value={props.value}
          onChange={props.onChange}
          endSelect={() => setShowWindow(false)}
          {...props}
        />
      )}
    </Container>
  );
};

const CalendarClockPicker = ({ value, onChange, ...props }) => {
  const [windowPage, setWindowPage] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleChangeDate = (value) => {
    const newDate = dayjs(value).format("MM/DD/YYYY");
    onChange(newDate + " " + time);
  };

  const handleSelectDate = (value) => {
    handleChangeDate(value);
    setWindowPage(windowPage + 1);
  };

  const handleChangeTime = (value) => {
    const formattedDate = dayjs(date).format("MM/DD/YYYY");
    onChange(formattedDate + " " + value);
  };

  const handleEndSelect = () => {
    setWindowPage(1);
    props.endSelect();
  };

  useEffect(() => {
    if (value) {
      const [date, time, timeOfDay] = value.split(" ");
      setDate(new Date(date));
      setTime(`${time} ${timeOfDay || ""}`);
    }
  }, [value]);

  return (
    <DateTimePickerWindow {...props}>
      {windowPage === 1 && (
        <Calendar
          className={`datepicker__calendar displayed`}
          value={date || new Date()}
          onChange={handleChangeDate}
          selectDate={handleSelectDate}
          dayOfWeekFormatter={props.dayOfWeekFormatter}
          color={props.color}
          backgroundColor={props.backgroundColor}
        />
      )}
      {windowPage === 2 && (
        <Clock
          value={time || "12:00"}
          onChange={handleChangeTime}
          endSelect={handleEndSelect}
          clickChangePage
          {...props}
        />
      )}
    </DateTimePickerWindow>
  );
};

DateTimePicker.propTypes = {
  /**
   * Value with hh:mm AM|PM format
   */
  value: PropTypes.string,
  /**
   * Change value function
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Background color of the clock
   */
  backgroundColor: PropTypes.string,
  /**
   * Color on focus elements
   */
  focusColor: PropTypes.string,
  /**
   * Color of the controls in the clock
   */
  color: PropTypes.string,
  /**
   * Component input
   */
  renderInput: PropTypes.func.isRequired,
};

DateTimePicker.defaultProps = {
  backgroundColor: "white",
  color: "teal",
  focusColor : "black"
};
