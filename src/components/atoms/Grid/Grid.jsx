import React from 'react';
import PropTypes from 'prop-types';
import { StyledGridContainer, StyledGridItem } from './styles.js';

export const Grid = ({ ...props }) => {
    if(!props.rowSpacing && props.spacing) props.rowSpacing = props.spacing;
    if(!props.columnSpacing && props.spacing) props.columnSpacing = props.spacing;

    // This function is used to get the max number of item per row
    const getNbItemPerRow = () => {
        const breakPointObj = {xs: [], sm: [], md: [], lg: [], xl: []};
        
        React.Children.forEach(props.children, child => {
            let data = { ...child.props }
            if (data.xs || data.sm || data.md || data.lg || data.xl) {
                if (!data.sm) data.sm = data.xs;
                if (!data.md) data.md = data.sm;
                if (!data.lg) data.lg = data.md;
                if (!data.xl) data.xl = data.lg;
            }
            
            breakPointObj.xs.push(data.xs);
            breakPointObj.sm.push(data.sm);
            breakPointObj.md.push(data.md);
            breakPointObj.lg.push(data.lg);
            breakPointObj.xl.push(data.xl);
        });
        
        for (const key in breakPointObj) {
            if (Object.hasOwnProperty.call(breakPointObj, key)) {
                let count = 0;
                const element = breakPointObj[key];
                element.forEach((value, key) => {
                    if (value) {
                        count += value;
                    }
                });
                return Math.ceil(4 / (count / props.columns));
            }
        }
    }

    // This function is used to set the props of the child
    const setChildProps = (data, nbItemPerRow) => {
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
            nbChild: nbItemPerRow,
            columnSpacing: props.columnSpacing,
        }
        
        return childProps;
    }

    // If its a container we return the components
    if (props.container) {
        const nbItemPerRow = getNbItemPerRow();
        console.log("max item per row :", nbItemPerRow);

        return (
            <StyledGridContainer {...props}>
                {React.Children.map(props.children, child => (
                    <StyledGridItem {...setChildProps({ ...child.props }, nbItemPerRow)}>
                        {child.props.children}
                    </StyledGridItem>
                ))}
            </StyledGridContainer >
        );
    }
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
    rowSpacing: PropTypes.oneOf([0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Column spacing
     * */
    columnSpacing: PropTypes.oneOf([0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
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
    wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse'])
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
    xl: false
}