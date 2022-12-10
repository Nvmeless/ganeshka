import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import StyledDatePicker from './styles.js';
import Calendar from '../Calendar/Calendar.jsx';

const DatePicker = (props) => {
  const [date, setDate] = useState(undefined)
  const [display, setDisplay] = useState(false);

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
    <StyledDatePicker {...props} className={props.className}>
      {props.renderInput({
        value: date,
        className: 'datepicker__input',
        placeholder: 'MM/DD/YYYY',
        label: props.label,
        readOnly: props.disabled,
        onClick: (e) => displayCalendar(e),
      })}
      <Calendar
        className={`datepicker__calendar ${display ? 'displayed' : ''}`}
        value={date || new Date()}
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