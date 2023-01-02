import styled from "styled-components";

export const StyledAppbar = styled.div`
  width: 100vw;
  position: fixed;
  top: 89vh;
  border-top: solid 1px ${(props) => props?.theme.grey};

  .App {
    background-color: ${(props) => props?.theme.white};
    color: ${(props) => props?.theme.primary};
  }

  .MuiBottomNavigation-root {
    background-color: ${(props) => props?.theme.white};
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
    color: ${(props) => props?.theme.grey};
  }
`;
