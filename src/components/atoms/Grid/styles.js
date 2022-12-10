import styled, { css } from "styled-components";

// Grid container styles
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

// Grid item styles
export const StyledGridItem = styled.div`
  // Child styles
  > * {
    height: 100%;
    width: 100%;
  }

  ${props => props?.zeroMinWidth && css`
    overflow-x: hidden;
  `}

  // XS
  @media (min-width: 0px) {
    ${props => (props?.xs && typeof props.xs === "number" && props.xs < props.columns) && css`
      flex-basis: calc((100% - 2 * ${props.columnSpacing} * (${props.maxItemPerRow} * 4px)) / ${props.columns} * ${props.xs});
      max-width: calc((100% - 2 * ${props.columnSpacing} * (${props.maxItemPerRow} * 4px)) / ${props.columns} * ${props.xs});
    `}
    ${props => (props?.xs && (props.xs === true || props.xs >= props.columns)) && css`
      flex-basis: 100%;
      max-width: 100%;
    `}
    ${props => (props?.xs && props.xs === 'auto') && css`
      flex-basis: content;
    `}
  }

  // SM
  @media (min-width: 600px) {
    ${props => (props?.sm && typeof props.sm === "number" && props.sm < props.columns) && css`
      flex-basis: calc((100% - 2 * ${props.columnSpacing} * (${props.maxItemPerRow} * 4px)) / ${props.columns} * ${props.sm});
      max-width: calc((100% - 2 * ${props.columnSpacing} * (${props.maxItemPerRow} * 4px)) / ${props.columns} * ${props.sm});
    `}
    ${props => (props?.sm && (props.sm === true || props.sm >= props.columns)) && css`
      flex-basis: 100%;
      max-width: 100%;
    `}
    ${props => (props?.sm && props.sm === 'auto') && css`
      flex-basis: content;
    `}
  }

  // MD
  @media (min-width: 900px) {
    ${props => (props?.md && typeof props.md === "number" && props.md < props.columns) && css`
      flex-basis: calc((100% - 2 * ${props.columnSpacing} * (${props.maxItemPerRow} * 4px)) / ${props.columns} * ${props.md});
      max-width: calc((100% - 2 * ${props.columnSpacing} * (${props.maxItemPerRow} * 4px)) / ${props.columns} * ${props.md});
    `}
    ${props => (props?.md && (props.md === true || props.md >= props.columns)) && css`
      flex-basis: 100%;
      max-width: 100%;
    `}
    ${props => (props?.md && props.md === 'auto') && css`
      flex-basis: content;
    `}
  }

  // LG
  @media (min-width: 1200px) {
    ${props => (props?.lg && typeof props.lg === "number" && props.lg < props.columns) && css`
      flex-basis: calc((100% - 2 * ${props.columnSpacing} * (${props.maxItemPerRow} * 4px)) / ${props.columns} * ${props.lg});
      max-width: calc((100% - 2 * ${props.columnSpacing} * (${props.maxItemPerRow} * 4px)) / ${props.columns} * ${props.lg});
    `}
    ${props => (props?.lg && (props.lg === true || props.lg >= props.columns)) && css`
      flex-basis: 100%;
      max-width: 100%;
    `}
    ${props => (props?.lg && props.lg === 'auto') && css`
      flex-basis: content;
    `}
  }

  // XL
  @media (min-width: 1536px) {
    ${props => (props?.xl && typeof props.xl === "number" && props.xl < props.columns) && css`
      flex-basis: calc((100% - 2 * ${props.columnSpacing} * (${props.maxItemPerRow} * 4px)) / ${props.columns} * ${props.xl});
      max-width: calc((100% - 2 * ${props.columnSpacing} * (${props.maxItemPerRow} * 4px)) / ${props.columns} * ${props.xl});
    `}
    ${props => (props?.xl && (props.xl === true || props.xl >= props.columns)) && css`
      flex-basis: 100%;
      max-width: 100%;
    `}
    ${props => (props?.xl && props.xl === 'auto') && css`
      flex-basis: content;
    `}
  }
`