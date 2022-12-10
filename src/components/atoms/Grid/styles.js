import styled, { css } from "styled-components";

//TODO: Add grid item styles

export const StyledGridContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: ${props => props?.wrap && props.wrap};
  flex-direction: ${props => props?.direction && props.direction};
  justify-content: ${props => props?.justifyContent && props.justifyContent};
  align-items: ${props => props?.alignItems && props.alignItems};
  ${props => props?.rowSpacing && typeof props.rowSpacing === "number" && css`
    row-gap: ${props.rowSpacing * 8}px !important;
  `}
  ${props => props?.columnSpacing && typeof props.columnSpacing === "number" && css`
    column-gap: ${props.columnSpacing * 8}px !important;
  `}
`

export const StyledGridItem = styled.div`
  flex-basis: 100%;

  ${props => (props?.xs && props.xs < props.columns) && css`
    @media (min-width: 0px) {
      flex-basis: calc((100% - 2 * ${props.columnSpacing} * ((${props.nbChild} - 1) * 4px)) / ${props.columns} * ${props.xs});
    }
  `}
  ${props => (props?.sm && props.sm < props.columns) && css`
    @media (min-width: 600px) {
      flex-basis: calc((100% - 2 * ${props.columnSpacing} * ((${props.nbChild} - 1) * 4px)) / ${props.columns} * ${props.sm});
    }
  `}
  ${props => (props?.md && props.md < props.columns) && css`
    @media (min-width: 900px) {
      flex-basis: calc((100% - 2 * ${props.columnSpacing} * ((${props.nbChild} - 1) * 4px)) / ${props.columns} * ${props.md});
    }
  `}
  ${props => (props?.lg && props.lg < props.columns) && css`
    @media (min-width: 1200px) {
      flex-basis: calc((100% - 2 * ${props.columnSpacing} * ((${props.nbChild} - 1) * 4px)) / ${props.columns} * ${props.lg});
    }
  `}
  ${props => (props?.xl && props.xl < props.columns) && css`
    @media (min-width: 1536px) {
      flex-basis: calc((100% - 2 * ${props.columnSpacing} * ((${props.nbChild} - 1) * 4px)) / ${props.columns} * ${props.xl});
    }
  `}
  
  ${props => props?.style && css`
    ${props.style}
  `}
`