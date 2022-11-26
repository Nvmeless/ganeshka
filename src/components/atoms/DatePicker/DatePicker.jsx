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

  // const formatToDateString = (e) => {
  //   e.preventDefault();
  //   const value = e.target.value;
  //   const isDeleteKey = e.nativeEvent.inputType === "deleteContentBackward";
  //   const isValidDateFormat = /^([0-9]{1,2}\/?)?([0-9]{1,2}\/?)?([0-9]{1,4})?$/g.test(value);

  //   if (value.length > 10 || (!isValidDateFormat && !isDeleteKey)) return;

  //   if (!isDeleteKey && [2,5].includes(value.length)) {
  //     return setValue(`${value}/`);
  //   }
    
  //   setValue(value);
  //   const dateValue = value.split('/')
  //   setFormattedValue({day: dateValue[0], month: dateValue[1], year: dateValue[2]})
  // };

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

  const setFormattedValue = ({day, month, year}) => {
    const newDate = date;
    newDate.setDate(day);
    newDate.setMonth(month);
    newDate.setFullYear(year);
    setDate(newDate);
    props.onChange(date);
    setValue(`${('0' + day).slice(-2)}/${('0' + (month + 1)).slice(-2)}/${year}`);
  }

  useEffect(() => {
    if (props.value) {
      setFormattedValue({
        day: props.value?.getDate(),
        month: props.value?.getMonth(),
        year: props.value?.getFullYear()
      })
    }
  }, [])

  return (
    <StyledDatePicker {...props} className={props.className} onClick={animateFocus}>
      {props.renderInput({
        value,
        ref: inputRef,
        className: 'datepicker__input',
        onChange: props.onChange,
        placeholder: 'DD/MM/YYYY',
        readOnly: true,
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