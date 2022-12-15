import styled from "styled-components";

export const StyledAppbar = styled.div`
  .App {
    background-color: ${(props) => props?.theme.background};
    color: ${(props) => props?.theme.primary};
  }

  .MuiBottomNavigation-root {
    background-color: ${(props) => props?.theme.background};
  }

  .Mui-selected {
    color: ${(props) => props?.theme.primary} !important;
    .MuiBottomNavigationAction-label,
    .MuiSvgIcon-root {
      color: ${(props) => props?.theme.primary};
    }
  }
  .MuiBottomNavigationAction-label,
  .MuiSvgIcon-root {
    color: white;
  }
`;
