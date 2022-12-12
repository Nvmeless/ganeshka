import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container } from "@mui/system";
import { ClockTimePicker } from "../ClockTimePicker/ClockTimePicker.jsx";
import { DateTimePickerWindow } from "./styles.js";
import Calendar from "../Calendar/Calendar.jsx";
import dayjs from "dayjs";
import DateTimeField from "../DateTimeField/DateTimeField.jsx";

export const DateTimePicker = (props) => {
  const [showWindow, setShowWindow] = useState(false);

  const toggleShowWindow = () => {
    setShowWindow(!showWindow);
  };

  return (
    <Container style={{ position: "relative", width: "fit-content" }}>
      {props.renderInput({ ...props, onClick : toggleShowWindow })}
      {showWindow && (
        <CalendarClockPicker
          value={props.value}
          onChange={props.onChange}
          {...props}
        />
      )}
    </Container>
  );
};

const CalendarClockPicker = ({value, onChange, ...props }) => {
  const [windowPage, setWindowPage] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const formatDate = (date) => {
    if(date instanceof Date) {
      const month = date.getMonth();
      const day = date.getDate();
      const year = date.getFullYear();
      return `${month < 10 ? "0"+month : month}/${day < 10 ? "0"+day : day}/${year}`
    }
  }

  const handleChangeDate = (value) => {
    const newDate = dayjs(value).format("MM/DD/YYYY");
    onChange(newDate + " " + time);
  };

  const handleSelectDate = (value) => {
    handleChangeDate(value);
    // setWindowPage(windowPage + 1);
  }

  const handleChangeTime = (value) => {
    const formattedDate = dayjs(date).format("MM/DD/YYYY");
    onChange(formattedDate + " " + value);
  };

  useEffect(() => {
    if (value) {
      let [date, time] = value.split(" ");
      setDate(new Date(date));
      setTime(time);
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
        <ClockTimePicker
          value={time || "12:00"}
          onChange={handleChangeTime}
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
   * Color of the controls in the clock
   */
  controlsColor: PropTypes.string,
  /**
   * Component input
   */
  renderInput: PropTypes.func.isRequired,
};

DateTimePicker.defaultProps = {
  backgroundColor: "white",
  controlsColor: "teal",
  renderInput: (props) => <DateTimeField {...props} />,
};
