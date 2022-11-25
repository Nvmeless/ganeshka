import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Grid = ({ container, item, direction, justify, alignItems, spacing, rowSpacing, columnSpacing, xs, sm, md, lg, xl, wrap, ...props }) => {
    // if any breakpoints are defined, set all undefined breakpoints to the last defined breakpoint
    if (xs || sm || md || lg || xl) {
        if (sm === true) sm = xs;
        if (md === true) md = sm;
        if (lg === true) lg = md;
        if (xl === true) xl = lg;
    }
    // console.log('xs', xs, 'sm', sm, 'md', md, 'lg', lg, 'xl', xl);

    const containerClass = container ? 'container' : '';
    const itemClass = item ? 'item' : '';
    const directionClass = direction
        ? `direction--${direction}`
        : '';
    const justifyClass = justify
        ? `justify--${justify}`
        : '';
    const alignItemsClass = alignItems
        ? `alignItems--${alignItems}`
        : '';
    const spacingClass = spacing
        ? `spacing--${spacing}`
        : '';
    const rowSpacingClass = rowSpacing
        ? `rowSpacing--${rowSpacing}`
        : '';
    const columnSpacingClass = columnSpacing
        ? `columnSpacing--${columnSpacing}`
        : '';
    const xsClass = xs
        ? `xs--${xs}`
        : '';
    const smClass = sm
        ? `sm--${sm}`
        : '';
    const mdClass = md
        ? `md--${md}`
        : '';
    const lgClass = lg
        ? `lg--${lg}`
        : '';
    const xlClass = xl
        ? `xl--${xl}`
        : '';
    const wrapClass = wrap
        ? `wrap--${wrap}`
        : '';
    return (
        <div className={[
            'grid',
            containerClass,
            itemClass,
            directionClass,
            justifyClass,
            alignItemsClass,
            spacingClass,
            rowSpacingClass,
            columnSpacingClass,
            xsClass,
            smClass,
            mdClass,
            lgClass,
            xlClass,
            wrapClass,
            props.className
        ].join(' ')} style={props.style}>
            {props.children}
        </div>
    )
}

Grid.propTypes = {
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
    container: false,
    item: false,
    direction: 'row',
    justify: 'flex-start',
    alignItems: 'stretch',
    spacing: 0,
    rowSpacing: 0,
    columnSpacing: 0,
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    wrap: 'nowrap'
}