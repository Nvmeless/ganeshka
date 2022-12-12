import styled from "styled-components";

export const DateTimePickerWindow = styled.div`
  position: absolute;
  width: 300px;
  height: 250px;
  top: 100%;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: zoom-in 0.2s ease;
  *,
  *::before,
  *::after {
    box-sizing: unset !important;
  }
`;