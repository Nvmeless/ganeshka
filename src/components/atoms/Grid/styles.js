// import styled, { css } from "styled-components";

// export const StyledGrid = styled.div`
//     display: flex;
//     flex-wrap: ${props => props?.wrap && props.wrap};
//     flex-direction: ${props => props?.direction && props.direction};
//     justify-content: ${props => props?.justifyContent && props.justifyContent};
//     align-items: ${props => props?.alignItems && props.alignItems};
//     align-content: ${props => props?.alignContent && props.alignContent};
//     ${props => props?.rowSpacing && css`
//     row-gap: ${props.rowSpacing};
//     `}
//     ${props => props?.columnSpacing && css`
//     column-gap: ${props.columnSpacing};
//     `}
//     ${props => props?.style && css`
//     ${props.style}
//     `}
//     ${props => props?.xs && css`
//     @media (max-width: 0px) {
//         ${props.xs}
//     }
//     `}
//     ${props => props?.sm && css`
//     @media (min-width: 600px) {
//         ${props.sm}
//     }
//     `}
//     ${props => props?.md && css`
//     @media (min-width: 900px) {
//         ${props.md}
//     }
//     `}
//     ${props => props?.lg && css`
//     @media (min-width: 1200px) {
//         ${props.lg}
//     }
//     `}
//     ${props => props?.xl && css`
//     @media (min-width: 1536px) {
//         ${props.xl}
//     }
//     `}
    
//     ${props => props?.style && css`
//     ${props.style}
//     `}
// `