import styled, { css } from "styled-components";

export const StyledToolBar = styled.div`
  min-height: 64px;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;
  display: flex;
  align-items: center;
  ${(props) =>
    props?.disableGutters &&
    css`
      padding: 0 !important;
    `}
  ${(props) =>
    props?.variant == "dense" &&
    css`
      min-height: 48px !important;
    `}
    ${(props) =>
    props?.sx &&
    css`
      ${props.sx};
    `}
`;
