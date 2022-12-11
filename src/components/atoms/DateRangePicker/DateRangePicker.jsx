import StyledDateRangePicker from './styles.js';
import { useState, useEffect } from 'react';
import Calendar from '../Calendar/Calendar.jsx';

const DateRangePicker = (props) => {
  const [display, setDisplay] = useState(true);
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
            onClick: displayRangeChooser, 
          },
          {
            value: props.value[1],
            className: 'daterangepicker__input',
            placeholder: 'MM/DD/YYYY',
            onClick: displayRangeChooser,
          }
        )}
      </div>
      {display && (
        <div className='daterangepicker__calendar-container'>
          <Calendar 
            className={`daterangepicker__calendar ${display ? 'displayed' : ''}`}
            value={startDate || todayDate}
            onChange={(val) => setFormattedValue([val, endDate])}
            dayOfWeekFormatter={props.dayOfWeekFormatter}
            color={props.color}
            range={{
              start: startDate,
              end: endDate
            }}
            backgroundColor={props.backgroundColor}
          />
          <Calendar
            className={`daterangepicker__calendar ${display ? 'displayed' : ''}`}
            value={endDate || tomorrowDate}
            onChange={(val) => setFormattedValue([startDate, val])}
            dayOfWeekFormatter={props.dayOfWeekFormatter}
            color={props.color}
            range={{
              start: startDate,
              end: endDate
            }}
            backgroundColor={props.backgroundColor}
          />
        </div>
      )}
    </StyledDateRangePicker>
  )
}

export default DateRangePicker;