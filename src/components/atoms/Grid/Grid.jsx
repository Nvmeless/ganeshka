import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Grid = ({ container, item, direction, justify, alignItems, spacing, rowSpacing, columnSpacing, wrap, ...props }) => {
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
    wrap: 'nowrap'
}

// // Path: src\components\atoms\Grid\index.test.js
// import React from 'react';
// import { render } from '@testing-library/react';
// import { Grid } from './Grid';

// describe('Grid', () => {
//     it('should render', () => {
//         const { container } = render(<Grid />);
//         expect(container).toBeInTheDocument();
//     });
// }

