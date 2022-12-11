import styled from "styled-components";

export default styled.div`
  position: relative;

  .daterangepicker__inputs {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .daterangepicker__calendar-container {
    display: flex;
    flex-direction: row;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 6px;

    .daterangepicker__calendar {
      box-shadow: none;
    }
  }
` 