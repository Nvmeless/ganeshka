import styled from 'styled-components';

export default styled.div`
  position: relative;
  width: ${(props) => props.width}px;
  color: ${(props) => props.color};

  label {
    position: absolute;
    top: 50%;
    left: 15px;
    text-align: left;
    transform: translateY(-50%);
    line-height: 1;
    transition: top 0.35s, font-size 0.35s;
    font-size: 16px;
    color: ${(props) => props.color};
  }

  label::before {
    content: "";
    height: calc(50% + 1px);
    background-color: ${(props) => props.backgroundColor};
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
  }

  .datepicker__input {
    width: 100%;
    padding: 15px;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 6px;
    border: 1px solid ${(props) => props.color};
  }

  .datepicker__input:not(:placeholder-shown),
  .datepicker__input:focus {
    outline: none;
  }

  .datepicker__input:not(:placeholder-shown) + label,
  .datepicker__input:focus + label {
    top: 0;
    font-size: 13px;
  }

  .datepicker__input::placeholder {
    opacity: 0;
    transition: opacity 0.35s;
    color: ${(props) => props.placeholderColor}
    user-select: none;
  }

  .datepicker__input:focus::placeholder {
    opacity: 1;
  }
  
  .datepicker__icon {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    line-height: 0;
    cursor: pointer;
    color: ${(props) => props.color};
    user-select: none;
  }
`
