import styled from "styled-components";

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

  .datefield__input {
    width: 100%;
    padding: 15px;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 6px;
    border: 1px solid ${(props) => props.color};
  }

  .datefield__input:not(:placeholder-shown),
  .datefield__input:focus {
    outline: none;
  }

  .datefield__input:not(:placeholder-shown) + label,
  .datefield__input:focus + label {
    top: 0;
    font-size: 13px;
  }

  .datefield__input::placeholder {
    opacity: 0;
    transition: opacity 0.35s;
    color: ${(props) => props.placeholderColor}
    user-select: none;
  }

  .datefield__input:focus::placeholder {
    opacity: 1;
  }
  
  .datefield__icon {
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