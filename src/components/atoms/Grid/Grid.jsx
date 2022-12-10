import React from 'react';
import PropTypes from 'prop-types';
import { StyledGridContainer, StyledGridItem } from './styles.js';

export const Grid = ({ ...props }) => {
    const setChildProps = (data) => {
        if (data.xs || data.sm || data.md || data.lg || data.xl) {
            if (!data.sm) data.sm = data.xs;
            if (!data.md) data.md = data.sm;
            if (!data.lg) data.lg = data.md;
            if (!data.xl) data.xl = data.lg;
        }

        const childProps = {
            xs: data.xs,
            sm: data.sm,
            md: data.md,
            lg: data.lg,
            xl: data.xl,
            columns: props.columns,
            spacing: props.spacing
        }

        return childProps;
    }

    if (props.container) {
        return (
            <StyledGridContainer {...props}>
                {/* {props.children} */}
                {React.Children.map(props.children, child => (
                    <StyledGridItem {...setChildProps({ ...child.props })}>
                        {child.props.children}
                    </StyledGridItem>
                ))}
            </StyledGridContainer >
        );
    }
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
    justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
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
    rowSpacing: PropTypes.oneOf(['auto', 0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Column spacing
     * */
    columnSpacing: PropTypes.oneOf(['auto', 0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * xs
     * */
    xs: PropTypes.oneOf(['auto', 'none', false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * sm
     * */
    sm: PropTypes.oneOf(['auto', 'none', false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * md
     * */
    md: PropTypes.oneOf(['auto', 'none', false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * lg
     * */
    lg: PropTypes.oneOf(['auto', 'none', false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * xl
     * */
    xl: PropTypes.oneOf(['auto', 'none', false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
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
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    wrap: 'wrap',
    spacing: 0,
    rowSpacing: 'true',
    columnSpacing: 'true',
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false
}