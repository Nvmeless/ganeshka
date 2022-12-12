import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "@mui/system";
import TimeField from "../../atoms/TimeField/TimeField.jsx";
import Clock from "../../atoms/Clock/Clock.jsx";

export const TimePicker = ({ ...props }) => {
  const [showWindow, setShowWindow] = useState(false);

  const toggleShowWindow = () => {
    setShowWindow(!showWindow);
  };

  return (
    <Container style={{ position: "relative", width: "fit-content" }}>
      {props.renderInput({ ...props, toggleShowWindow })}
      {showWindow && (
        <Clock
          value={props.value}
          onChange={props.onChange}
          endSelect={() => setShowWindow(false)}
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
  color: PropTypes.string,
  /**
   * Component input
   */
  renderInput: PropTypes.func.isRequired,
};

TimePicker.defaultProps = {
  backgroundColor: "white",
  color: "teal",
  renderInput: (props) => <TimeField {...props} />,
};
