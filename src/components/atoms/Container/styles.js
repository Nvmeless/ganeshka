import styled, {css} from "styled-components";

export const StyledAppBar = styled.div`
  background-color: ${(props) => props?.color && props.color};
  
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