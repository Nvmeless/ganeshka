import styled from 'styled-components';

export default styled.div`
  position: relative;
  width: ${(props) => props.width}px;
  color: ${(props) => props.color};

  .datepicker__calendar {
    position: absolute;
    width: fit-content;
    bottom: -10px;
    transform: translateY(100%);
  }
`
