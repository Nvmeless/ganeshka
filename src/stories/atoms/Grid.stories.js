
import React from 'react';
import { Grid } from '../../components/atoms/Grid/Grid';

export default {
    title: 'Atoms/GridV3',
    component: Grid,
    argTypes: {
        children: { type: "number", defaultValue: 4 },
    },

};

const DefaultTemplate = ({ children, ...args }) => (
    <Grid {...args}>
        {[...Array(children).keys()].map(n => (
            <Grid item key={n}>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#" + ((1 << 24) * Math.random() | 0).toString(16), // random color
                    }}
                >
                    {n + 1}
                </div>
            </Grid>
        ))}
    </Grid>
)


const TwoByTwoTemplate = ({ ...args }) => (
    <>
        <Grid {...args}>
            <Grid item>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "gold",
                    }}
                >1</div>
            </Grid>
            <Grid item>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "pink",
                    }}
                >2</div>
            </Grid>
        </Grid>
        <Grid {...args}>
            <Grid item>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "turquoise",
                    }}
                >3</div>
            </Grid>
            <Grid item>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "lightblue",
                    }}
                >4</div>
            </Grid>
        </Grid>
    </>
)

const AlignmentTemplate = ({ ...args }) => (
    <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
    >
        <Grid item>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "gold",
                }}
            >1</div>
        </Grid>
        <Grid item>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "pink",
                }}
            >2</div>
        </Grid>
    </Grid>
)




export const Row = DefaultTemplate.bind({});
Row.args = {
    container: true,
    item: true,
    direction: 'row',
    justify: 'flex-start',
    alignItems: 'flex-start',
    spacing: 0,
    rowSpacing: 0,
    columnSpacing: 0,
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
    wrap: 'wrap',
};

export const Column = DefaultTemplate.bind({});
Column.args = {
    container: true,
    item: true,
    direction: 'column',
    justify: 'flex-start',
    alignItems: 'flex-start',
    spacing: 0,
    rowSpacing: 0,
    columnSpacing: 0,
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
    wrap: 'wrap',
};

export const RowSpacing = DefaultTemplate.bind({});
RowSpacing.args = {
    container: true,
    item: false,
    direction: 'column',
    justify: 'flex-start',
    alignItems: 'flex-start',
    spacing: 0,
    rowSpacing: 2,
    columnSpacing: 0,
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
    wrap: 'wrap',
};

export const ColumnSpacing = DefaultTemplate.bind({});
ColumnSpacing.args = {
    container: true,
    item: false,
    direction: 'row',
    justify: 'flex-start',
    alignItems: 'flex-start',
    spacing: 0,
    rowSpacing: 0,
    columnSpacing: 2,
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
    wrap: 'wrap',
};

export const TwoByTwo = TwoByTwoTemplate.bind({});

export const Alignments = AlignmentTemplate.bind({});
Alignments.args = {
    container: true,
    item: false,
    direction: 'row',
    justify: 'flex-start',
    alignItems: 'flex-start',
    spacing: 2,
    rowSpacing: 2,
    columnSpacing: 2,
    xs: 1,
    sm: 1,
    md: 1,
    lg: 1,
    xl: 1,
};
