import styled, { css, useTheme, withTheme } from "styled-components";


 const StyledTHead = styled.thead`
 color:${props => !props.primary && props.theme.secondary};
 color:${props => props.primary && props.theme.primary};
 background-color:${props => !props.primary && props.theme.container.secondary}};
 background-color:${props => props.primary && props.theme.container.primary}};
 `;


 export default StyledTHead;