import { useEffect } from "react";
import { useRef, useState } from "react";
import { CgCalendar } from 'react-icons/cg';
import StyledDateField from './styles.js';
import PropTypes from 'prop-types';

const DateField = (props) => {
  const [value, setValue] = useState('');
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
      const dateValue = new Date(eventValue);
      const isValidDate = dateValue instanceof Date && !isNaN(dateValue);
      if (!isValidDate) {
        setValue('')
        return;
      }
      props.onChange(dateValue);
    }
  };

  const animateFocus = (e) => {
    e.preventDefault();
    inputRef.current.focus();
  }

  useEffect(() => {
    if (typeof props.value !== 'object') {
      return;
    }
    const month = props.value.getMonth() + 1;
    const day = props.value.getDate();
    const year = props.value.getFullYear();
    setValue(`${month}/${day}/${year}`)
  }, [props.value])

  return (
    <StyledDateField
      {...props}
      className={props.className}
      onFocus={(e) => !props.disabled && animateFocus(e)}
      onClick={(e) => !props.disabled && animateFocus(e)}
    >
      <input
        value={value}
        ref={inputRef} 
        className='datefield__input' 
        onChange={formatToDateString} 
        placeholder='MM/DD/YYYY' 
        readOnly={props.disabled}
        disabled={props.disabled}
      />
      {props.label && <label>{props.label}</label>}
      {props.displayIcon && (
        <span className='datefield__icon' onClick={(e) => !props.disabled && props.onClick(e)}>
          <CgCalendar size={25} color={props.color} />
        </span>
      )}
    </StyledDateField>
  )
}

DateField.propTypes = {
  value: PropTypes.instanceOf(Date),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  width: PropTypes.number,
  label: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  placeholderColor: PropTypes.string,
  displayIcon: PropTypes.bool,
};

DateField.defaultProps = {
  disabled: false,
  width: 200,
  color: '#000',
  displayIcon: true,
  backgroundColor: '#fff',
  placeholderColor: 'gray',
};

export default DateField;