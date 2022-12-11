import styled, { css } from "styled-components";

export const StyledSlider = styled.input.attrs({ type: "range" })`
  ${(props) =>
    props.vertical &&
    css`
      transform-origin: 75px 75px;
      transform: rotate(-90deg);
    `}

  ${(props) =>
    props?.width &&
    css`
      width: ${props.width};
    `}
  ${(props) =>
    props?.height &&
    css`
      height: ${props.height};
    `}
  ${(props) =>
    props?.margin &&
    css`
      margin: ${props.margin};
    `}
  ${(props) =>
    props?.colorDown &&
    css`
      background-color: ${props.colorDown};
    `}
  overflow: hidden;
  -webkit-appearance: none;
  border-radius: 10px;

  &::-webkit-slider-runnable-track {
    ${(props) =>
      props?.height &&
      css`
        height: ${props.height};
      `}
    -webkit-appearance: none;
    ${(props) =>
      props?.colorUp &&
      css`
        color: ${props.colorUp};
      `}
    margin-top: -1px;
  }

  &::-webkit-slider-thumb {
    width: 10px;
    -webkit-appearance: none;
    ${(props) =>
      props?.height &&
      css`
        height: ${props.height};
      `}
    cursor: ew-resize;
    background: #434343;
    ${(props) =>
      props?.colorUp &&
      css`
        box-shadow: -100vw 0 0 100vw ${props.colorUp};
      `}
  }
`;
