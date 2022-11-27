import styled, { css } from "styled-components";

export const StyledGrid = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  flex-wrap: ${props => props?.wrap && props.wrap};
  flex-direction: ${props => props?.direction && props.direction};
  justify-content: ${props => props?.justifyContent && props.justifyContent};
  align-items: ${props => props?.alignItems && props.alignItems};
  align-content: ${props => props?.alignContent && props.alignContent};
  row-gap: ${props => props?.rowSpacing && props.rowSpacing * 8}px;
  column-gap: ${props => props?.columnSpacing && props.columnSpacing * 8}px;
  gap: ${props => props?.spacing && props.spacing * 8}px;
  ${props => props?.xs && css`
    @media (max-width: 0px) {
      max-width: calc(${(props.xs / props.columns) * 100}% - ${props.spacing * 8}px);
    }
  `}
  ${props => props?.sm && css`
    @media (min-width: 600px) {
      max-width: calc(${(props.sm / props.columns) * 100}% - ${props.spacing * 8}px);
    }
  `}
  ${props => props?.md && css`
    @media (min-width: 900px) {
      max-width: calc(${(props.md / props.columns) * 100}% - ${props.spacing * 8}px);
    }
  `}
  ${props => props?.lg && css`
    @media (min-width: 1200px) {
      max-width: calc(${(props.lg / props.columns) * 100}% - ${props.spacing * 8}px);
    }
  `}
  ${props => props?.xl && css`
    @media (min-width: 1536px) {
      max-width: calc(${(props.xl / props.columns) * 100}% - ${props.spacing * 8}px);
    }
  `}
  ${props => props?.style && css`
    ${props.style}
  `}
`