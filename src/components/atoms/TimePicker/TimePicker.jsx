import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "@mui/system";
import TimeField from "../TimeField/TimeField.jsx";
import { ClockTimePicker } from "../ClockTimePicker/ClockTimePicker.jsx";

export const TimePicker = ({ ...props }) => {
  const [showWindow, setShowWindow] = useState(false);

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
  backgroundColor: "white",
  controlsColor: "teal",
  renderInput: (props) => <TimeField {...props} />,
};
