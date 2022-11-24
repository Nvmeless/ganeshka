// mui like-grid

import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Grid = ({ container, item, direction, justify, alignItems, spacing, wrap, ...props }) => {
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
    spacing: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
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

    // Path: src\components\atoms\Grid\style.css
    .grid {
    display: flex;
    flex - direction: row;
    flex - wrap: nowrap;
    justify - content: flex - start;
    align - items: stretch;
    align - content: stretch;
    margin: 0;
    padding: 0;
    width: 100 %;
    height: 100 %;
    box - sizing: border - box;
}

.grid.container {
    flex - direction: column;
}

.grid.item {
    flex: 1 1 auto;
    min - width: 0;
    min - height: 0;
}

.grid.direction--row {
    flex - direction: row;
}

.grid.direction--row - reverse {
    flex - direction: row - reverse;
}

.grid.direction--column {
    flex - direction: column;
}

.grid.direction--column - reverse {
    flex - direction: column - reverse;
}

.grid.justify--flex - start {
    justify - content: flex - start;
}

.grid.justify--flex - end {
    justify - content: flex - end;
}

.grid.justify--center {
    justify - content: center;
}

.grid.justify--space - between {
    justify - content: space - between;
}

.grid.justify--space - around {
    justify - content: space - around;
}

.grid.justify--space - evenly {
    justify - content: space - evenly;
}

.grid.alignItems--flex - start {
    align - items: flex - start;
}

.grid.alignItems--flex - end {
    align - items: flex - end;
}

.grid.alignItems--center {
    align - items: center;
}

.grid.alignItems--baseline {
    align - items: baseline;
}

.grid.alignItems--stretch {
    align - items: stretch;
}

.grid.spacing--0 {
    margin: 0;
}

.grid.spacing--1 {
    margin: 8px;
}

.grid.spacing--2 {
    margin: 16px;
}

.grid.spacing--3 {
    margin: 24px;
}

.grid.spacing--4 {
    margin: 32px;
}

.grid.spacing--5 {
    margin: 40px;
}

.grid.spacing--6 {
    margin: 48px;
}

.grid.spacing--7 {
    margin: 56px;
}

.grid.spacing--8 {
    margin: 64px;
}

.grid.spacing--9 {
    margin: 72px;
}

.grid.spacing--10 {
    margin: 80px;
}

.grid.wrap--nowrap {
    flex - wrap: nowrap;
}

.grid.wrap--wrap {
    flex - wrap: wrap;
}

.grid.wrap--wrap - reverse {
    flex - wrap: wrap - reverse;
}

// Path: src\components\atoms\Grid\index.js
export { Grid } from './Grid';

// Path: src\components\atoms\Grid\index.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { Grid } from './Grid';

describe('Grid', () => {
    it('should render', () => {
        const { container } = render(<Grid />);
        expect(container).toBeInTheDocument();
    });
}

// Path: src\components\atoms\Grid\index.stories.js

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from './Grid';

storiesOf('Atoms/Grid', module)

    .add('Default', () => (
        <Grid>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
            <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
            <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
        </Grid>
    ))

    .add('Container', () => (
        <Grid container>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
            <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
            <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
        </Grid>
    ))

    .add('Item', () => (
        <Grid container>
            <Grid item>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
            </Grid>
            <Grid item>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
            </Grid>
            <Grid item>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
            </Grid>
        </Grid>
    ))

    .add('Direction', () => (
        <Grid container>
            <Grid item>
                <Grid container direction="row">
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="row-reverse">
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="column">
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="column-reverse">
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
                </Grid>
            </Grid>
        </Grid>
    ))

    .add('Justify', () => (
        <Grid container>
            <Grid item>
                <Grid container justify="flex-start">
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
                </Grid>
            </Grid>
            <Grid item>
                <Grid container justify="flex-end">
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
                </Grid>
            </Grid>
            <Grid item>
                <Grid container justify="center">
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
                </Grid>
            </Grid>
            <Grid item>
                <Grid container justify="space-between">
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
                </Grid>
            </Grid>
            <Grid item>
                <Grid container justify="space-around">
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
                </Grid>
            </Grid>
        </Grid>
    ))

    .add('Align Items', () => (
        <Grid container>
            <Grid item>
                <Grid container alignItems="flex-start">
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
                </Grid>
            </Grid>
            <Grid item>
                <Grid container alignItems="flex-end">
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
                </Grid>
            </Grid>
            <Grid item>
                <Grid container alignItems="center">
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
                </Grid>
            </Grid>
            <Grid item>
                <Grid container alignItems="stretch">
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
                </Grid>
            </Grid>
            <Grid item>
                <Grid container alignItems="baseline">
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
                </Grid>
            </Grid>
        </Grid>
    ))

    .add('Align Content', () => (
        <Grid container>
            <Grid item>
                <Grid container alignItems="flex-start">
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
                </Grid>
            </Grid>
            <Grid item>
                <Grid container alignItems="flex-end">
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
                </Grid>
            </Grid>
            <Grid item>
                <Grid container alignItems="center">
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
                </Grid>
            </Grid>
            <Grid item>
                <Grid container alignItems="stretch">
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
                </Grid>
            </Grid>
            <Grid item>
                <Grid container alignItems="baseline">
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
                </Grid>
            </Grid>
        </Grid>
    ))

    // skip nested grid for now
    // .add('Nested Grid', () => (
    //     <Grid container>
    //         <Grid item>
    //             <Grid container>
    //                 <Grid item>

    //                 </Grid>
    //             </Grid>
    //         </Grid>
    //     </Grid>
    // ))

    .add('Spacing', () => (
        <Grid container spacing={2}>
            <Grid item>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
            </Grid>
            <Grid item>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
            </Grid>
            <Grid item>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
            </Grid>
        </Grid>
    ))

    .add('Breakpoints', () => (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
            </Grid>
        </Grid>
    ))

    .add('Auto Layout', () => (
        <Grid container spacing={2}>
            <Grid item xs>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
            </Grid>
            <Grid item xs>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
            </Grid>
            <Grid item xs>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
            </Grid>
        </Grid>
    ))

    .add('Auto Layout with Breakpoints', () => (
        <Grid container spacing={2}>
            <Grid item xs={12} sm>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
            </Grid>
            <Grid item xs={12} sm>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
            </Grid>
            <Grid item xs={12} sm>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
            </Grid>
        </Grid>
    ))

    .add('Auto Layout with Breakpoints and Fixed Width', () => (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
            </Grid>
        </Grid>
    ))

    .add('Auto Layout with Breakpoints and Fixed Width and Fixed Height', () => (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} style={{ height: '100px' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
            </Grid>
            <Grid item xs={12} sm={6} style={{ height: '100px' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
            </Grid>
            <Grid item xs={12} sm={6} style={{ height: '100px' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
            </Grid>
        </Grid>
    ))

    .add('Auto Layout with Breakpoints and Fixed Width and Fixed Height and Fixed Width', () => (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} style={{ height: '100px', width: '100px' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
            </Grid>
            <Grid item xs={12} sm={6} style={{ height: '100px', width: '100px' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
            </Grid>

            <Grid item xs={12} sm={6} style={{ height: '100px', width: '100px' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
            </Grid>
        </Grid>
    ))

    .add('Auto Layout with Breakpoints and Fixed Width and Fixed Height and Fixed Width and Fixed Height', () => (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} style={{ height: '100px', width: '100px' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
            </Grid>
            <Grid item xs={12} sm={6} style={{ height: '100px', width: '100px' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }} />
            </Grid>

            <Grid item xs={12} sm={6} style={{ height: '100px', width: '100px' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
            </Grid>
        </Grid>
    ))





