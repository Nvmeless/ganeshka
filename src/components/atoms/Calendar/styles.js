import styled from 'styled-components';

export default styled.div`
  visibility: hidden;
  opacity: 0;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 15px;
  border-radius: 6px;
  transition: visibility 0s linear 0.36s, opacity 0.35s, bottom 0.35s;
  z-index: 50;
  width: fit-content;

  .agenda__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;

    > span {
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      gap: 10px;
      white-space: nowrap;
      cursor: pointer;
    }

    > div {
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      gap: 30px;

      > svg {
        cursor: pointer;
      }
    }
  }

  .agenda__year-chooser {
    position: absolute;
    inset: 0;
    z-index: 5;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    padding: 10px;
    font-size: 0.9em;
    overflow: auto;

    span {
      padding: 7px 0;
      border-radius: 100px;
      cursor: pointer;
    }

    span:hover {
      background-color: ${(props) => props.backgroundColor};
      filter: brightness(85%);
    }

    span.selected {
      color: ${(props) => props.backgroundColor};
      background-color: ${(props) => props.color};
    }
  }

  .agenda__body-header {
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

  .agenda__grid {
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

    span.inrange {
      background-color: ${(props) => props.backgroundColor};
      border: 1px solid ${(props) => props.color};
      color: ${(props) => props.color};
    }

    span.selected {
      background-color: ${(props) => props.color};
      opacity: 1;
      color: ${(props) => props.backgroundColor};
    }
  }

  &.displayed {
    transition: visibility 0s, opacity 0.35s, bottom 0.35s;
    bottom: -10px;
    opacity: 1;
    visibility: visible;
  }
`
