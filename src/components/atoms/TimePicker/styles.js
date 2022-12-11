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
  background-color: ${props => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: zoom-in 0.2s ease;

  @keyframes zoom-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const ClockButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  ${(props) =>
    props.selected &&
    css`
      color: white;
      background-color: ${props => props.controlsColor};
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

    button {
      color : white;
    }
`;

const clockContainerSize = 200;
const clockContainerPadding = 18;

const getRadAngle = (nbElements, index) => {
  const decalage = Math.floor(nbElements / 4);
  const degreAngle = (360 / nbElements) * (index + decalage);
  return degreAngle * (Math.PI / 180);
};

const getLeftTop = (radAngle) => {
  const base = clockContainerSize / 2 + clockContainerPadding;

  const left = base - Math.round((clockContainerSize / 2) * Math.cos(radAngle));
  const top = base - Math.round((clockContainerSize / 2) * Math.sin(radAngle));
  return [left, top];
};

const getSpansStyle = (nbElements) => {
  let spansStyle = "";
  for (let i = 0; i < nbElements; i++) {
    const radAngle = getRadAngle(nbElements, i);
    const [left, top] = getLeftTop(radAngle);

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
  padding: 18px;
  ${(props) => props.nbElements && getSpansStyle(props.nbElements)}

  span:nth-of-type(5n + 1) {
    z-index: 2;

    p {
      line-height: 14px;
    }
  }
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
  pointer-events: none;

  p {
    margin: 0;
    pointer-events: all;
    display: flex;
    align-items: center;

    .dot {
      width: 1px;
      height: 1px;
      background-color: gray;
      border-radius: 50%;
    }
  }

  ${(props) => props.selected && css`
    p {
      color : black;

      .dot {
        background-color : black;
      }
    }
  `}
`;

export const ClockPointer = styled.div`
  .thumb {
    width: 4px;
    height: 4px;
    background-color: ${props => props.controlsColor};
    border-radius: 50%;
    position: absolute;
    border: 16px solid ${props => props.controlsColor};
    box-sizing: content-box;
    transform: translate(-50%, -50%);
    display: none;
    ${(props) =>
      !isNaN(props.selectedIndex) &&
      props.selectedIndex >= 0 &&
      css`
        display: block;
        left: ${getLeftTop(
          getRadAngle(props.nbElements, props.selectedIndex)
        )[0]}px;
        top: ${getLeftTop(
          getRadAngle(props.nbElements, props.selectedIndex)
        )[1]}px;
      `}
  }

  .line {
    position: absolute;
    width: 100px;
    height: 4px;
    background-color: ${props => props.controlsColor};
    display: none;
    left: 50%;
    top: 50%;
    ${(props) =>
      !isNaN(props.selectedIndex) &&
      props.selectedIndex >= 0 &&
      css`
        display: block;
        transform-origin: left;
        transform: translateY(-50%)
          rotate(
            ${Math.PI + getRadAngle(props.nbElements, props.selectedIndex)}rad
          );
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
    background-color: ${props => props.controlsColor};
  }
`;

export const ClockPageControls = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;

  button {
    color: ${props => props.controlsColor};
  }
`;
