import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  ClockButtonContainer,
  ClockContainer,
  ClockItem,
  ClockPageControls,
  ClockPointer,
  ClockTimePickerWindow,
} from "./styles.js";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import TimeField from "./TimeField.jsx";

const hours = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
const minutes = [];
for (let i = 0; i < 60; i++) {
  if (i < 10) {
    minutes.push("0" + i);
  } else {
    minutes.push(i.toString());
  }
}

export const TimePicker = ({ ...props }) => {
  const [showWindow, setShowWindow] = useState(true);

  const toggleShowWindow = () => {
    setShowWindow(!showWindow);
  };

  return (
    <Container style={{ position: "relative", width: "fit-content" }}>
      {props.renderInput({ ...props, toggleShowWindow })}
      {showWindow && (
        <ClockTimePicker
          value={props.value}
          onChange={props.onChange}
          {...props}
        />
      )}
    </Container>
  );
};

const ClockTimePicker = ({ value, onChange, ...props }) => {
  const [timeValue, setTimeValue] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("AM");
  const [windowPage, setWindowPage] = useState(1);
  const [hourSelected, setHourSelected] = useState("");
  const [minuteSelected, setMinuteSelected] = useState("");

  const handleClickHour = (hour) => {
    const value = `${formatHour(hour)}:${
      timeValue.split(":")[1] || "00"
    } ${timeOfDay}`;
    onChange(value);
  };

  const handleClickMinute = (minute) => {
    const value = `${timeValue.split(":")[0] || "00"}:${minute} ${timeOfDay}`;
    onChange(value);
  };

  const handleTimeOfDayChange = (value) => {
    onChange(`${timeValue} ${value}`);
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
    if (value) {
      setTimeValue(value.split(" ")[0]);
      setTimeOfDay(value.split(" ")[1]);
    }
  }, [value]);

  const formatHour = (hour) => {
    let textHour = hour;

    if (textHour.length === 1) {
      textHour = "0" + textHour;
    }

    return textHour;
  };

  return (
    <ClockTimePickerWindow {...props}>
      <ClockContainer
        nbElements={windowPage === 1 ? hours.length : minutes.length}
        {...props}
      >
        <ClockPointer
          nbElements={windowPage === 1 ? hours.length : minutes.length}
          selectedIndex={windowPage === 1 ? hourSelected : minuteSelected}
          {...props}
        >
          <div className="base"></div>
          <div className="line"></div>
          <div className="thumb"></div>
        </ClockPointer>
        {windowPage === 1 &&
          hours.map((hour, index) => {
            return (
              <ClockItem
                key={"hour" + hour}
                selected={
                  windowPage === 1
                    ? hourSelected === index
                    : minuteSelected === index
                }
              >
                <p onClick={() => handleClickHour(hour, index)}>{hour}</p>
              </ClockItem>
            );
          })}
        {windowPage === 2 &&
          minutes.map((minute, index) => {
            return (
              <ClockItem key={"minute" + minute}>
                <p onClick={() => handleClickMinute(minute, index)}>
                  {minute % 5 === 0 ? minute : <span className="dot"></span>}
                </p>
              </ClockItem>
            );
          })}
      </ClockContainer>
      <ClockButtonContainer left selected={timeOfDay === "AM"} {...props}>
        <Button onClick={() => handleTimeOfDayChange("AM")}>AM</Button>
      </ClockButtonContainer>
      <ClockButtonContainer right selected={timeOfDay === "PM"} {...props}>
        <Button onClick={() => handleTimeOfDayChange("PM")}>PM</Button>
      </ClockButtonContainer>
      <ClockPageControls {...props}>
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
  );
};

TimePicker.propTypes = {
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

TimePicker.defaultProps = {
  backgroundColor: "#2e2e2e",
  controlsColor: "teal",
  renderInput: (props) => <TimeField {...props} />,
};
