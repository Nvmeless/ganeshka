import React, { useEffect, useState } from "react";
import { ClockWindow } from "./styles.js";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const hours = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
const minutes = [];
for (let i = 0; i < 60; i++) {
  if (i < 10) {
    minutes.push("0" + i);
  } else {
    minutes.push(i.toString());
  }
}

const Clock = (props) => {
  const [timeValue, setTimeValue] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");
  const [windowPage, setWindowPage] = useState(1);
  const [hourSelected, setHourSelected] = useState("");
  const [minuteSelected, setMinuteSelected] = useState("");

  const handleClickHour = (hour) => {
    const value = `${formatHour(hour)}:${timeValue.split(":")[1] || "00"} ${
      timeOfDay || "AM"
    }`;
    props.onChange(value);
    if (props.clickChangePage) {
      setWindowPage(windowPage + 1);
    }
  };

  const handleClickMinute = (minute) => {
    const value = `${timeValue.split(":")[0] || "00"}:${minute} ${
      timeOfDay || "AM"
    }`;
    props.onChange(value);
    if (props.clickChangePage) {
      setWindowPage(1);
      if (props.endSelect) {
        props.endSelect();
      }
    }
  };

  const handleTimeOfDayChange = (value) => {
    props.onChange(`${timeValue} ${value}`);
  };

  useEffect(() => {
    if (timeValue) {
      const selectedHourIndex = hours.findIndex(
        (e) => parseInt(e) === parseInt(timeValue.split(":")[0])
      );

      setHourSelected(selectedHourIndex);

      const selectedMinuteIndex = minutes.findIndex(
        (e) => parseInt(e) === parseInt(timeValue.split(":")[1])
      );

      setMinuteSelected(selectedMinuteIndex);
    }
  }, [timeValue]);

  useEffect(() => {
    if (props.value) {
      const [timeValue, timeOfDay] = props.value.split(" ");
      setTimeValue(timeValue);
      if (timeOfDay) {
        setTimeOfDay(timeOfDay);
      }
    }
  }, [props.value]);

  const formatHour = (hour) => {
    let textHour = hour;

    if (textHour.length === 1) {
      textHour = "0" + textHour;
    }

    return textHour;
  };

  return (
    <ClockWindow
      timeOfDay={timeOfDay}
      nbElements={windowPage === 1 ? hours.length : minutes.length}
      selectedIndex={windowPage === 1 ? hourSelected : minuteSelected}
      {...props}
    >
      <div className="clock_container">
        <div className="clock_pointer">
          <div className="base"></div>
          <div className="line"></div>
          <div className="thumb"></div>
        </div>
        {windowPage === 1 &&
          hours.map((hour, index) => {
            const isSelected = hourSelected === index;
            return (
              <span
                className={`clock_item ${isSelected ? "selected" : ""}`}
                key={"hour" + hour}
              >
                <p onClick={() => handleClickHour(hour, index)}>{hour}</p>
              </span>
            );
          })}
        {windowPage === 2 &&
          minutes.map((minute, index) => {
            const isSelected = minuteSelected === index;
            return (
              <span
                className={`clock_item ${isSelected ? "selected" : ""}`}
                key={"minute" + minute}
              >
                <p onClick={() => handleClickMinute(minute, index)}>
                  {minute % 5 === 0 ? minute : <span className="dot"></span>}
                </p>
              </span>
            );
          })}
      </div>
      <div
        className={`clock_button_container left ${
          timeOfDay === "AM" ? "selected" : ""
        }`}
      >
        <Button onClick={() => handleTimeOfDayChange("AM")}>AM</Button>
      </div>
      <div
        className={`clock_button_container right ${
          timeOfDay === "PM" ? "selected" : ""
        }`}
      >
        <Button onClick={() => handleTimeOfDayChange("PM")}>PM</Button>
      </div>
      <div className="clock_page_controls">
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
      </div>
    </ClockWindow>
  );
};

Clock.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  clickChangePage: PropTypes.bool,
  endSelect: PropTypes.func,
  backgroundColor: PropTypes.string,
  focusColor: PropTypes.string,
  color: PropTypes.string,
};

Clock.defaultProps = {
  clickChangePage: true,
  backgroundColor: "#fff",
  focusColor : "#fff",
  color: "#000",
};

export default Clock;