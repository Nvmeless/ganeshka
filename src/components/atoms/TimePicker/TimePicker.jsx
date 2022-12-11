import React, { useEffect, useState } from "react";
import PropTypes, { string } from "prop-types";
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
    <Container style={{position : "relative", width : "fit-content"}}>
      {props.renderInput({ ...props, toggleShowWindow })}
      {showWindow && (
        <ClockTimePicker value={props.value} onChange={props.onChange} />
      )}
    </Container>
  );
};

const ClockTimePicker = ({ value, onChange }) => {
  const timeValue = value.split(" ")[0];
  const timeOfDay = value.split(" ")[1];
  const [windowPage, setWindowPage] = useState(1);
  const [hourSelected, setHourSelected] = useState("");
  const [minuteSelected, setMinuteSelected] = useState("");

  const handleClickHour = (hour) => {
    const value = `${formatHour(hour)}:${timeValue.split(":")[1] || "00"} ${timeOfDay}`;
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
    const selectedHourIndex = hours.findIndex(
      (e) => parseInt(e) === parseInt(timeValue.split(":")[0])
    );
    const selectedMinuteIndex = minutes.findIndex(
      (e) => parseInt(e) === parseInt(timeValue.split(":")[1])
    );

    setHourSelected(selectedHourIndex);
    setMinuteSelected(selectedMinuteIndex);
  }, [timeValue]);

  const formatHour = (hour) => {
    let textHour = hour;

    if (textHour.length === 1) {
      textHour = "0" + textHour;
    }

    return textHour;
  };

  return (
    <ClockTimePickerWindow>
      <ClockContainer
        nbElements={windowPage === 1 ? hours.length : minutes.length}
      >
        <ClockPointer
          nbElements={windowPage === 1 ? hours.length : minutes.length}
          selectedIndex={windowPage === 1 ? hourSelected : minuteSelected}
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
      <ClockButtonContainer left selected={timeOfDay === "AM"}>
        <Button onClick={() => handleTimeOfDayChange("AM")}>AM</Button>
      </ClockButtonContainer>
      <ClockButtonContainer right selected={timeOfDay === "PM"}>
        <Button onClick={() => handleTimeOfDayChange("PM")}>PM</Button>
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
  );
};

TimePicker.propTypes = {};

TimePicker.defaultProps = {
  ampm: true,
};
