import { useEffect } from "react";
import { useRef, useState } from "react";
import { CgCalendar } from "react-icons/cg";
import StyledDateField from "./styles.js";
import PropTypes from "prop-types";

const DateTimeField = (props) => {
  const [value, setValue] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");
  const inputRef = useRef();

  const formatToDateString = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const eventValue = e.target.value;
    console.log(eventValue);
    const isDeleteKey = e.nativeEvent.inputType === "deleteContentBackward";
    const isValidDateFormat =
      /^([0-9]{1,2}\/?)?([0-9]{1,2}\/?)?([0-9]{1,4}) ?([0-1]?[0-2]):[0-5][0-9]?$/g.test(eventValue);
    const isValidCompleteDateFormat =
      /^([0-9]{2}\/)([0-9]{2}\/)([0-9]{4}) ([0-1]?[0-2]):[0-5][0-9]$/g.test(eventValue);

      console.log(isValidDateFormat);
      console.log(isValidCompleteDateFormat);
    if (isValidDateFormat || isValidCompleteDateFormat) {
      if (!isDeleteKey && [2, 5].includes(eventValue.length)) {
        return setValue(`${eventValue}/`);
      }
      setValue(eventValue);
    }

    if (isValidCompleteDateFormat) {
      const dateValue = new Date(eventValue);
      const isValidDate = dateValue instanceof Date && !isNaN(dateValue);
      if (!isValidDate) {
        setValue("");
        return;
      }
      props.onChange(dateValue);
    }
  };

  const animateFocus = (e) => {
    e.preventDefault();
    inputRef.current.focus();
  };

  const handleTimeOfDayChange = (e) => {
    props.onChange(value + " " + e.target.value);
  };

  useEffect(() => {
    if (props.value) {
      const splitDateTime = props.value.split(" ");
      const date = new Date(splitDateTime[0]);
      const time = splitDateTime[1];
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const year = date.getFullYear();
      setValue(`${month}/${day}/${year} ${time}`);
      setTimeOfDay(splitDateTime[2]);
    }
  }, [props.value]);

  return (
    <StyledDateField
      {...props}
      className={props.className}
      onFocus={animateFocus}
      onClick={animateFocus}
    >
      <input
        value={value}
        ref={inputRef}
        className="datefield__input"
        onChange={formatToDateString}
        placeholder="MM/DD/YYYY HH:mm"
        readOnly={props.disabled}
      />
      {/* <select value={timeOfDay} onChange={handleTimeOfDayChange}>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select> */}
      {props.label && <label>{props.label}</label>}
      <span
        className="datefield__icon"
        onClick={!props.disabled && props.onClick}
      >
        <CgCalendar size={25} color={props.color} />
      </span>
    </StyledDateField>
  );
};

DateTimeField.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  closeOnSelect: PropTypes.bool,
  disabled: PropTypes.bool,
  disableOpenPicker: PropTypes.bool,
  open: PropTypes.bool,
  width: PropTypes.number,
  label: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  placeholderColor: PropTypes.string,
};

DateTimeField.defaultProps = {
  disabled: false,
  closeOnSelect: true,
  disableOpenPicker: false,
  open: false,
  width: 200,
  color: "#000",
  backgroundColor: "#fff",
  placeholderColor: "gray",
};

export default DateTimeField;
