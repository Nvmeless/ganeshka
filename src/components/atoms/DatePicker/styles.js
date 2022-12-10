import styled from 'styled-components';

export default styled.div`
  position: relative;
  width: ${(props) => props.width}px;
  color: ${(props) => props.color};

  .datepicker__calendar {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(100%);
  }
`
