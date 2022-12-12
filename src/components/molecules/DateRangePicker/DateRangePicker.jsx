import StyledDateRangePicker from './styles.js';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Calendar from '../../atoms/Calendar/Calendar.jsx';

const DateRangePicker = (props) => {
  const [display, setDisplay] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const todayDate = new Date();
  const tomorrowDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() + 1);

  const displayRangeChooser = () => {
    setDisplay(!display);
  }

  const setFormattedValue = ([start, end]) => {
    setStartDate(start);
    setEndDate(end);
    props.onChange([start, end]);
  }

  useEffect(() => {
    if (props.value) {
      return setFormattedValue(props.value)
    }
    props.onChange([startDate, endDate]);
  }, [])

  return (
    <StyledDateRangePicker>
      <div className='daterangepicker__inputs'>
        {props.renderInput(
          {
            value: props.value[0],
            className: 'daterangepicker__input',
            placeholder: 'MM/DD/YYYY',
            onClick: (!props.disableOpenPicker && !props.disabled) && displayRangeChooser, 
            backgroundColor: props.backgroundColor,
            color: props.colors,
            placeholderColor: props.placeholderColor,
            open: props.open,
          },
          {
            value: props.value[1],
            className: 'daterangepicker__input',
            placeholder: 'MM/DD/YYYY',
            onClick: (!props.disableOpenPicker && !props.disabled) && displayRangeChooser,
            backgroundColor: props.backgroundColor,
            color: props.colors,
            placeholderColor: props.placeholderColor,
            open: props.open,
          }
        )}
      </div>
      {display && (
        <div className='daterangepicker__calendar-container'>
          <Calendar 
            className="daterangepicker__calendar"
            open={props.open || display}
            value={startDate || todayDate}
            onChange={(val) => setFormattedValue([val, endDate])}
            dayOfWeekFormatter={props.dayOfWeekFormatter}
            color={props.color}
            range={{
              start: startDate,
              end: endDate
            }}
            backgroundColor={props.backgroundColor}
            disabled={props.disabled}
          />
          <Calendar
            className="daterangepicker__calendar"
            open={props.open || display}
            value={endDate || tomorrowDate}
            onChange={(val) => setFormattedValue([startDate, val])}
            dayOfWeekFormatter={props.dayOfWeekFormatter}
            color={props.color}
            range={{
              start: startDate,
              end: endDate
            }}
            backgroundColor={props.backgroundColor}
            disabled={props.disabled}
          />
        </div>
      )}
    </StyledDateRangePicker>
  )
}


DateRangePicker.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  renderInput: PropTypes.func.isRequired,
  className: PropTypes.string,
  closeOnSelect: PropTypes.bool,
  dayOfWeekFormatter: PropTypes.func,
  disabled: PropTypes.bool,
  disableOpenPicker: PropTypes.bool,
  open: PropTypes.bool,
  width: PropTypes.number,
  label: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  placeholderColor: PropTypes.string,
};

DateRangePicker.defaultProps = {
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

export default DateRangePicker;