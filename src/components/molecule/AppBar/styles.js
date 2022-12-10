import styled, { css } from "styled-components";

export const StyledAppBar = styled.div`
  background-color: ${(props) => props?.color && props.color};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  color: #fff;
  ${(props) =>
    props?.position &&
    css`
      position: ${props.position};
    `}
  ${(props) =>
    props?.margin &&
    css`
      margin: ${props.margin};
    `}
    ${(props) =>
    props?.sx &&
    css`
      ${props.sx};
    `}
    ${(props) =>
    !props?.enableColorOnDark &&
    props?.theme.mode == "dark" &&
    css`
      background-color: #121212 !important;
    `}
`;
