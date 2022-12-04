import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import StyledDatePicker from './styles.js';
import { CgCalendar } from 'react-icons/cg';
import Calendar from '../Calendar/Calendar.jsx';

const DatePicker = (props) => {
  const [value, setValue] = useState('');
  const [date, setDate] = useState(new Date())
  const [display, setDisplay] = useState(false);

  const inputRef = useRef();

  const formatToDateString = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const eventValue = e.target.value;
    const isDeleteKey = e.nativeEvent.inputType === "deleteContentBackward";
    const isValidDateFormat = /^([0-9]{1,2}\/?)?([0-9]{1,2}\/?)?([0-9]{1,4})?$/g.test(eventValue);
    const isValidCompleteDateFormat = /^([0-9]{2}\/)([0-9]{2}\/)([0-9]{4})$/g.test(eventValue);

    if (isValidDateFormat || isValidCompleteDateFormat) {
      if (!isDeleteKey && [2,5].includes(eventValue.length)) {
        return setValue(`${eventValue}/`);
      }
      setValue(eventValue)
    }
    if (isValidCompleteDateFormat) {
      setFormattedValue(new Date(eventValue));
    }
  };

  const animateFocus = (e) => {
    e.preventDefault();
    inputRef.current.focus();
  }

  const displayCalendar = (e) => {
    if (display) {
      e.stopPropagation();
    }
    setDisplay(!display);
  }

  const setFormattedValue = (newDate) => {
    setDate(newDate);
    props.onChange(newDate);
  }

  useEffect(() => {
    if (props.value) {
      return setFormattedValue(props.value)
    }
    props.onChange(date);
  }, [])

  return (
    <StyledDatePicker {...props} className={props.className} onClick={animateFocus}>
      {props.renderInput({
        value,
        ref: inputRef,
        className: 'datepicker__input',
        onChange: formatToDateString,
        placeholder: 'MM/DD/YYYY',
        readOnly: props.disabled,
      })}
      {props.label && <label>{props.label}</label>}
      <span className='datepicker__icon' onClick={!props.disabled && displayCalendar}><CgCalendar size={25} color={props.color} /></span>
      <Calendar
        className={display ? 'displayed' : ''}
        value={date}
        onChange={(val) => setFormattedValue(val)}
        dayOfWeekFormatter={props.dayOfWeekFormatter}
        color={props.color}
        backgroundColor={props.backgroundColor}
      />
    </StyledDatePicker>
  )
}

DatePicker.propTypes = {
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  renderInput: PropTypes.func.isRequired,
  className: PropTypes.string,
  closeOnSelect: PropTypes.bool,
  dayOfWeekFormatter: PropTypes.func,
  defaultCalendarMonth: PropTypes.any,
  disabled: PropTypes.bool,
  disableOpenPicker: PropTypes.bool,
  maxDate: PropTypes.any,
  minDate: PropTypes.any,
  open: PropTypes.bool,
  width: PropTypes.number,
  label: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  placeholderColor: PropTypes.string,
};

DatePicker.defaultProps = {
  disabled: false,
  closeOnSelect: true,
  disableOpenPicker: false,
  open: false,
  width: 200,
  color: '#000',
  backgroundColor: '#fff',
  placeholderColor: 'gray',
  dayOfWeekFormatter: (day) => day.charAt(0).toUpperCase(),
};

export default DatePicker;