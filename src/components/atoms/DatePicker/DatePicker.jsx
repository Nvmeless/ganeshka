import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

const StyledDatePicker = styled.div`

`

const DatePicker = (props) => {
  const [value, setValue] = useState('');

  const formatToDateString = (e) => {
    const value = e.target.value.replace('/', '');
    const dayRegex = value.replace(/(\d{2})/, '$1/');
    const monthRegex = dayRegex.replace(/(\d{2})\/(\d{2})/, '$1/$2/');
    const yearRegex = monthRegex.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$1/$2/$3');
    setValue(yearRegex);
  };

  return (
    <StyledDatePicker {...props} className={props.className}>
      <input type="text" placeholder="DD/MM/YYYY" onChange={formatToDateString} value={value} />
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
};

DatePicker.defaultProps = {
  disabled: false,
  closeOnSelect: true,
  disableOpenPicker: false,
  open: false,
  dayOfWeekFormatter: (day) => day.charAt(0).toUpperCase(),
};

export default DatePicker;