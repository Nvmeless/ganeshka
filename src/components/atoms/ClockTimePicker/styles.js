import styled, { css } from "styled-components";

export const ClockTimePickerWindow = styled.div`
  position: absolute;
  width: 300px;
  height: 250px;
  z-index: 3;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: zoom-in 0.2s ease;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 6px;

  *,
  *::before,
  *::after {
    box-sizing: unset !important;
  }

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

  button {
    color: ${(props) => props.controlsColor};
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: ${(props) => props.controlsColor};
      button {
        color: white;
      }
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
  color: ${(props) => props.controlsColor};
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

  ${(props) =>
    props.selected &&
    css`
      p {
        color: black;

        .dot {
          background-color: black;
        }
      }
    `}
`;

export const ClockPointer = styled.div`
  .thumb {
    width: 4px;
    height: 4px;
    background-color: ${(props) => props.controlsColor};
    border-radius: 50%;
    position: absolute;
    border: 16px solid ${(props) => props.controlsColor};
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
    background-color: ${(props) => props.controlsColor};
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
    background-color: ${(props) => props.controlsColor};
  }
`;

export const ClockPageControls = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;

  button {
    color: ${(props) => props.controlsColor};
  }
`;
