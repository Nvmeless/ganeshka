import styled, {css} from "styled-components";

export const StyledLink = styled.div`
    background-color:${props => props?.backgroundColor && props.backgroundColor};

   
    ${props => props?.a.link && css`
    a.link: ${props.a.link};
    `}

.linkContainer a {
  color: var(--link-text-color, currentColor);
  cursor: pointer;
  display: inline;
  text-decoration: none;
  transition: color 200ms ease;
}

a.link--unstyled {
  outline: none;
}

a.link:not(.link--unstyled),
.linkContainer a {
  &:hover,
  &.is-hovered {
    color: var(--link-hovered-color);
  }

  &:active,
  &.is-active {
    color: var(--link-active-color);
  }

  &:focus,
  &.is-focused {
    outline: 1px solid currentColor;
    outline-offset: 0.1rem;
    text-decoration: none;
  }
}
`
