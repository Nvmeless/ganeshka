import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import StyledDatePicker from './styles.js';

const DatePicker = (props) => {
  const [value, setValue] = useState('');
  const [display, setDisplay] = useState(false);
  const inputRef = useRef();

  const formatToDateString = (e) => {
    const value = e.target.value;
    const isDeleteKey = e.nativeEvent.inputType === "deleteContentBackward";
    const isValidDateFormat = /^([0-9]{1,2}\/?)?([0-9]{1,2}\/?)?([0-9]{1,4})?$/g.test(value);

    if (value.length > 10 || (!isValidDateFormat && !isDeleteKey)) return;

    if (!isDeleteKey && [2,5].includes(value.length)) {
      return setValue(`${value}/`);
    }
    setValue(value);
  };

  const animateFocus = (e) => {
    e.preventDefault();
    inputRef.current.focus();
  }

  const displayCalendar = (e) => {
    e.stopPropagation();
    setDisplay(!display);
  }

  return (
    <StyledDatePicker {...props} className={props.className} onClick={animateFocus}>
      <input ref={inputRef} type="text" placeholder="DD/MM/YYYY" onChange={formatToDateString} value={value} />
      {props.label && <label>{props.label}</label>}
      <span className='datepicker__icon' onClick={displayCalendar}>O</span>
      <div className={`datepicker__agenda ${display ? 'displayed' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className='datepicker__agenda-header'>
          <div>
            <span>Novembre 2022</span>
            <span>X</span>
          </div>
          <div>
            <span>&lt;</span>
            <span>&gt;</span>
          </div>
        </div>
        <div>
          <div className='datepicker__agenda-body-header'>
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
            <span>S</span>
          </div>
          <div className='datepicker__agenda-grid'>
            <span>ok</span>
            <span>ok</span>
            <span>ok</span>
            <span>ok</span>
            <span>ok</span>
            <span>ok</span>
            <span>ok</span>
            <span>ok</span>
            <span>ok</span>
            <span>ok</span>
            <span>ok</span>
            <span>ok</span>
            <span>ok</span>
            <span>ok</span>
            <span>ok</span>
            <span>ok</span>
            <span>ok</span>
            <span>ok</span>
            <span>ok</span>
            <span>ok</span>
          </div>
        </div>
      </div>
    </StyledDatePicker>
  )
}

DatePicker.propTypes = {
  onChange: PropTypes.func,
  renderInput: PropTypes.func,
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