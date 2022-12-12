import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  width: fit-content;
  height: fit-content;
  border: 1px solid grey;
  border-radius: 5px;
  margin-top: 50px;
  ${(props) =>
    props.active &&
    css`
      border-width: 2px;
      border-color: blue;
    `}
  ${(props) =>
    props.error &&
    css`
      border-color: red;
    `}

  label {
    position: absolute;
    left: 14px;
    bottom: 50%;
    transform: translateY(50%);
    line-height: 1.4375rem;
    pointer-events: none;
    transition-duration: 250ms;
    color: grey;
    margin-top: 12px;
    ${(props) =>
      props.active &&
      css`
        color: blue;
        font-size: 12px;
        bottom: 100%;
        transform: translateY(0);
      `};
    ${(props) =>
      props.error &&
      css`
        color: red;
      `};
  }

  input {
    border-radius: 5px;
    width: 100%;
    height: 1.4375rem;
    border: none;
    padding: 16.5px 0px 16.5px 14px;
    background-color: transparent;
    color: inherit;
    &:focus {
      outline: none;
    }
  }

  select {
    background-color: transparent;
    border: none;
    color: inherit;

    option {
      color: black;
      border: none;
    }
  }
`;