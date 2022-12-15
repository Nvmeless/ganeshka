import React from "react";
import PropTypes from "prop-types";

export const Action = ({ ...props }) => {
  return (
    <>
      {props.action && props.icon ? (
        <p style={{ margin: "5px", alignSelf: "center" }}>{props.icon}</p>
      ) : (
        ""
      )}
    </>
  );
};

Action.propTypes = {
  /**
   * Which action is it
   */
  action: PropTypes.string,
  /**
   * Which icon to display
   */
  icon: PropTypes.object,
};

Action.defaultProps = {};

