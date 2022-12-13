import styled from "styled-components";

export const StyledAppbar = styled.div`
  .MuiBottomNavigation-root {
    background-color: ${(props) =>
      props?.theme.background && props?.theme.background};
  }

  .Mui-selected {
    color: ${(props) =>
      props?.theme.primary && props?.theme.primary} !important;
    .MuiBottomNavigationAction-label,
    .MuiSvgIcon-root {
      color: ${(props) => props?.theme.primary && props?.theme.primary};
    }
  }
  .MuiBottomNavigationAction-label,
  .MuiSvgIcon-root {
    color: white;
  }
`;
