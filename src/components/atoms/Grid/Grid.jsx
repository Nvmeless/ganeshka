import React from 'react';
import PropTypes from 'prop-types';
import { StyledGrid } from './styles.js';

export const Grid = ({ ...props }) => {
    // if any breakpoints are defined, set all undefined breakpoints to the last defined breakpoint
    if (props.xs || props.sm || props.md || props.lg || props.xl) {
        if (!props.sm) props.sm = props.xs;
        if (!props.md) props.md = props.sm;
        if (!props.lg) props.lg = props.md;
        if (!props.xl) props.xl = props.lg;
    }

    console.log(props);

    return (
        <StyledGrid {...props}>
            {props.children}
        </StyledGrid>
    );
}

Grid.propTypes = {
    /**
     * Columns
     * */
    columns: PropTypes.number,
    /**
     * Is container ?
     * */
    container: PropTypes.bool,
    /**
     * Is item ?
     * */
    item: PropTypes.bool,
    /**
     * Direction
     * */
    direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
    /**
     * Justify
     * */
    justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
    /**
     * Align items
     * */
    alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
    /**
     * Spacing
     * */
    spacing: PropTypes.oneOf([0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     *  Row spacing
     * */
    rowSpacing: PropTypes.oneOf([0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Column spacing
     * */
    columnSpacing: PropTypes.oneOf([0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * xs
     * */
    xs: PropTypes.oneOf(['auto', 'none', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * sm
     * */
    sm: PropTypes.oneOf(['auto', 'none', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * md
     * */
    md: PropTypes.oneOf(['auto', 'none', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * lg
     * */
    lg: PropTypes.oneOf(['auto', 'none', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * xl
     * */
    xl: PropTypes.oneOf(['auto', 'none', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Wrap
     * */
    wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse'])
}

Grid.defaultProps = {
    columns: 12,
    container: false,
    item: false,
    direction: 'row',
    justify: 'flex-start',
    alignItems: 'stretch',
    spacing: 0,
    rowSpacing: 0,
    columnSpacing: 0,
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    wrap: 'wrap'
}