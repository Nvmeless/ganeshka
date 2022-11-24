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
    height: 50%;
    background-color: ${(props) => props.backgroundColor};
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
  }

  input {
    width: 100%;
    padding: 15px;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 6px;
    border: 1px solid ${(props) => props.color};
  }

  input:focus {
    outline: none;
  }

  input:focus + label {
    top: 0;
    font-size: 13px;
  }

  input::placeholder {
    opacity: 0;
    transition: opacity 0.35s;
    color: ${(props) => props.placeholderColor}
    user-select: none;
  }

  input:focus::placeholder {
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

  .datepicker__agenda {
    opacity: 0;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(100%);
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    padding: 15px;
    border-radius: 6px;
    transition: opacity 0.35s, bottom 0.35s;

    &-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;

      > div:first-child {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        gap: 10px;
      }

      > div:last-child {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        gap: 30px;
      }
    }

    &-body-header {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 15px;
      padding: 0 10px;
      font-size: 0.9em;
      padding: 0 10px;
      margin: 20px 0 15px 0;
      
      span {
        color: ${(props) => props.color};
        filter: brightness(180%);
        user-select: none;
      }
    }

    &-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 15px;
      padding: 0 10px;
      font-size: 0.9em;

      span {
        cursor: pointer;
        border-radius: 100%;
        line-height: 1;
        padding: 10px;
        transition: background-color 0.35s;
        user-select: none;
      }

      span:hover {
        background-color: ${(props) => props.backgroundColor};
        filter: brightness(85%);
      }
    }
  }

  .datepicker__agenda.displayed {
    bottom: -10px;
    opacity: 1;
  }
`
