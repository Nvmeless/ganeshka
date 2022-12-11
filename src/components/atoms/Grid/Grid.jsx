import React from 'react';
import PropTypes from 'prop-types';
import { StyledGridContainer, StyledGridItem } from './styles.js';

export const Grid = ({ ...props }) => {
    // This function is used to set the breakpoint props
    const setBreakpointProps = (data) => {
        if (data.xs || data.sm || data.md || data.lg || data.xl) {
            if (!data.sm) data.sm = data.xs;
            if (!data.md) data.md = data.sm;
            if (!data.lg) data.lg = data.md;
            if (!data.xl) data.xl = data.lg;
        }
        return data;
    }

    // This function is used to get the max number of item per row
    const getMaxItemPerRow = (data) => {
        const breakPointArray = [[], [], [], [], []];
        let result = 0;

        React.Children.forEach(data.children, child => {
            const tmp = setBreakpointProps({ ...child.props });

            breakPointArray[0].push(tmp.xs);
            breakPointArray[1].push(tmp.sm);
            breakPointArray[2].push(tmp.md);
            breakPointArray[3].push(tmp.lg);
            breakPointArray[4].push(tmp.xl);
        });

        breakPointArray.forEach((elt) => {
            let count = 0;
            elt.forEach(value => count += typeof value === "number" ? value : 0);
            result = count > 0 ? (Math.ceil(4 / (count / data.columns)) - 1) : 0;
        });

        return result;
    }

    // This function is used to set the props of the child
    const setChildProps = (parent, child, maxItemPerRow) => {
        const data = setBreakpointProps({ ...child.props });

        const childProps = {
            xs: data.xs,
            sm: data.sm,
            md: data.md,
            lg: data.lg,
            xl: data.xl,
            zeroMinWidth: data.zeroMinWidth,
            columns: parent.columns,
            columnSpacing: parent.columnSpacing,
            maxItemPerRow: maxItemPerRow,
        }

        return childProps;
    }

    // This function is used to render a <Grid container></Grid>
    const containerRendering = ({ ...data }) => {
        const maxItemPerRow = getMaxItemPerRow(data);
        if (!data.rowSpacing) data.rowSpacing = data.spacing;
        if (!data.columnSpacing) data.columnSpacing = data.spacing;

        if (data.container) {
            return (
                <StyledGridContainer {...data}>
                    {React.Children.map(data.children, child => {
                        return child.props.item && !child.props.container
                            ? (childRendering(data, child, maxItemPerRow))
                            : (containerRendering(child.props));
                    })}
                </StyledGridContainer >
            );
        }
    }

    // This function is used to render a <Grid item></Grid>
    const childRendering = (parent, child, maxItemPerRow) => {
        return (
            <StyledGridItem {...setChildProps(parent, child, maxItemPerRow)}>
                {child.props.children}
            </StyledGridItem>
        );
    }

    // Return the component
    return (
        containerRendering(props)
    );
}

// Define possible values for the props
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
    rowSpacing: PropTypes.oneOf([null, 0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Column spacing
     * */
    columnSpacing: PropTypes.oneOf([null, 0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * xs
     * */
    xs: PropTypes.oneOf(['auto', false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * sm
     * */
    sm: PropTypes.oneOf(['auto', false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * md
     * */
    md: PropTypes.oneOf(['auto', false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * lg
     * */
    lg: PropTypes.oneOf(['auto', false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * xl
     * */
    xl: PropTypes.oneOf(['auto', false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Wrap
     * */
    wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
    /**
     * Zero min width
     * */
    zeroMinWidth: PropTypes.bool,
}

// Define default values for the props
Grid.defaultProps = {
    columns: 12,
    container: false,
    item: false,
    direction: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    wrap: 'wrap',
    spacing: 0,
    rowSpacing: null,
    columnSpacing: null,
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    zeroMinWidth: false,
}