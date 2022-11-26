import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  width: fit-content;
  height: 100%;
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

export const ClockTimePickerWindow = styled.div`
  position: absolute;
  width: 300px;
  height: 250px;
  top: 100%;
  background-color: #2e2e2e;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ClockButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  ${(props) =>
    props.selected &&
    css`
      background-color: red;
    `}

  ${(props) =>
    props.left &&
    css`
      left: 0;
    `}

      ${(props) =>
    props.right &&
    css`
      right: 0;
    `}
`;

const itemCount = 12;

const thetaHours = [
  Math.PI / 2,
  2 * (Math.PI / 3),
  5 * (Math.PI / 6),
  Math.PI,
  7 * (Math.PI / 6),
  4 * (Math.PI / 3),
  3 * (Math.PI / 2),
  5 * (Math.PI / 3),
  11 * (Math.PI / 6),
  0,
  Math.PI / 6,
  Math.PI / 3,
];

const thetaMinutes = [
  Math.PI / 2,
  (7 * Math.PI) / 18,
  2 * (Math.PI / 3),
  5 * (Math.PI / 6),
  Math.PI,
  7 * (Math.PI / 6),
  4 * (Math.PI / 3),
  3 * (Math.PI / 2),
  5 * (Math.PI / 3),
  11 * (Math.PI / 6),
  0,
  Math.PI / 6,
  Math.PI / 3,
];

const getSpansStyle = (page) => {
  let spansStyle = ``;
  for (let i = 0; i < itemCount; i++) {
    const theta = page === 1 ? thetaHours : thetaMinutes;
    const left = 118 - Math.round(100 * Math.cos(theta[i]));
    const top = 118 - Math.round(100 * Math.sin(theta[i]));

    spansStyle += `span:nth-of-type(${i + 1}) {
      left : ${left}px;
      top : ${top}px;
    }`;
  }
  return spansStyle;
};

export const ClockContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #2b2b2b;
  padding: 18px;

  ${spansStyle}
`;

export const ClockItem = styled.span`
  position: absolute;
  color: white;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;

  p {
    margin: 0;
    height: fit-content;
  }
`;

export const ClockPointer = styled.div`
  .thumb {
    width: 4px;
    height: 4px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    border: 16px solid blue;
    box-sizing: content-box;
    transform: translate(-50%, -50%);
    display: none;
    ${(props) =>
      !isNaN(props.selected) &&
      props.selected >= 0 &&
      css`
        display: block;
        left: ${118 - Math.round(100 * Math.cos(theta[props.selected]))}px;
        top: ${118 - Math.round(100 * Math.sin(theta[props.selected]))}px;
      `}
  }

  .line {
    position: absolute;
    width: 100px;
    height: 4px;
    background-color: red;
    display: none;
    left: 50%;
    top: 50%;
    ${(props) =>
      !isNaN(props.selected) &&
      props.selected >= 0 &&
      css`
        display: block;
        transform-origin: left;
        transform: translateY(-50%)
          rotate(${Math.PI + theta[props.selected]}rad);
      `}
  }

  .base {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: red;
  }
`;

export const ClockPageControls = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;

  button {
    color: white;
  }
`;
