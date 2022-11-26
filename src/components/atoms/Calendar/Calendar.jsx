import { RiArrowDropRightLine, RiArrowDropLeftLine } from 'react-icons/ri';
import { MdArrowDropDown } from 'react-icons/md';
import PropTypes from 'prop-types';
import StyledCalendar from './styles.js';
import { useEffect } from 'react';

const Calendar = (props) => {
  const daysName = ["Monday", "Tuesday", "Wenesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const getAllDaysInMonth = (year, month) => {
    const startDate = new Date(year, month, 1);
    const dates = [];

    while (startDate.getMonth() === month) {
      dates.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);
    }

    if (dates.length > 0) {
      const firstDay = dates[0].getDay() === 0 ? dates[0].getDay() : dates[0].getDay() - 1 ;
      dates.unshift(...Array(firstDay).fill(undefined));
    }
    return dates;
  }

  const setPrevMonth = () => {
    const newMonth = props.value.getMonth() - 1;
    const isYearBoundaries = props.value.getMonth() === 0;
    props.onChange({
      day: props.value.getDate(),
      month: isYearBoundaries ? monthsName.length - 1 : newMonth,
      year: isYearBoundaries ? props.value.getFullYear() - 1 : props.value.getFullYear(),
    })
  }

  const setNextMonth = () => {
    const newMonth = props.value.getMonth() + 1;
    const isYearBoundaries = props.value.getMonth() === monthsName.length - 1;
    props.onChange({
      day: props.value.getDate(),
      month: isYearBoundaries ? 0 : newMonth,
      year: isYearBoundaries ? props.value.getFullYear() + 1 : props.value.getFullYear(),
    })
  }

  const selectDate = (day) => {
    props.onChange({
      day: day.getDate(),
      month: day.getMonth(),
      year: day.getFullYear()
    })
  }

  return (
    <StyledCalendar {...props} className={`agenda ${props.className}`} onClick={(e) => e.stopPropagation()}>
      <div className='agenda__header'>
        <div>
          <span>{monthsName[props.value.getMonth()]} {props.value.getFullYear()}</span>
          <MdArrowDropDown size={30} color={props.color} />
        </div>
        <div>
          <RiArrowDropLeftLine size={30} color={props.color} onClick={setPrevMonth} />
          <RiArrowDropRightLine size={30} color={props.color} onClick={setNextMonth} />
        </div>
      </div>
      <div>
        <div className='agenda__body-header'>
          {daysName.map((dayName, index) => (
            <span key={index}>{props.dayOfWeekFormatter(dayName)}</span>
          ))}
        </div>
        <div className='agenda__grid'>
          {getAllDaysInMonth(props.value.getFullYear(), props.value.getMonth()).map((day, index) => (
            <span key={index} onClick={() => selectDate(day)} className={day && day.getDate() === props.value.getDate() ? 'selected' : ''}>{day ? day.getDate() : ''}</span>
          ))}
        </div>
      </div>
    </StyledCalendar>
  )
}


Calendar.propTypes = {
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  dayOfWeekFormatter: PropTypes.func,
  defaultCalendarMonth: PropTypes.any,
  maxDate: PropTypes.any,
  minDate: PropTypes.any,
  width: PropTypes.number,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Calendar.defaultProps = {
  width: 200,
  color: '#000',
  backgroundColor: '#fff',
  dayOfWeekFormatter: (day) => day.charAt(0).toUpperCase(),
};

export default Calendar;