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

    // row spacing
    .add('Row Spacing', () => (
        <Grid container rowSpacing={2}>
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

    // column spacing
    .add('Column Spacing', () => (
        <Grid container columnSpacing={2}>
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

    .add('Auto Layout with Breakpoints and Fixed Height', () => (
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

    .add('Auto Layout with Breakpoints and Fixed Width and Fixed Height', () => (
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



