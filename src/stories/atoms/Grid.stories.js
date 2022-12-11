import React from 'react';
import { Grid } from '../../components/atoms/Grid/Grid';

export default {
    title: 'Atoms/GridV3',
    component: Grid,
    argTypes: {
        container: {
            control: false,
        },
        item: {
            control: false,
        },
        xs: {
            control: false,
        },
        sm: {
            control: false,
        },
        md: {
            control: false,
        },
        lg: {
            control: false,
        },
        xl: {
            control: false,
        },
    },
};

const GridContainerTemplate = ({ ...args }) => (

    <Grid container {...args} style={{
        border: "1px solid darkgray",
        backgroundColor: "lightgray",
        borderRadius: "5px",
    }}>
        <Grid item key="1" >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minWidth: "50px",
                    minHeight: "50px",
                    color: "white",
                    backgroundColor: "red",
                }}>A</div>
        </Grid>
        <Grid item key="2">
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minWidth: "50px",
                    minHeight: "75px",
                    color: "white",
                    backgroundColor: "deeppink",
                }}>B</div>
        </Grid>
        <Grid item key="3">
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minWidth: "50px",
                    minHeight: "100px",
                    color: "white",
                    backgroundColor: "hotpink",

                }}>C</div>
        </Grid>

    </Grid>
);

export const GridContainer = GridContainerTemplate.bind({});
GridContainer.args = {
    container: true,
    item: false,
    spacing: 2,
    columns: 4,
    wrap: "wrap",
    direction: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
    rowSpacing: 2,
    columnSpacing: 2,
};

export const Breakpoints = () => (
    <Grid container spacing={2} justifyContent={"center"} wrap={"nowrap"}>
        <Grid item xs={1} sm={1} md={2} lg={3} xl={4} key="1">
            <div
                style={{
                    textAlign: "center",
                    color: "white",
                    backgroundColor: "red",
                }}>A</div>
        </Grid>
        <Grid item xs={1} sm={1} md={2} lg={3} xl={4} key="2">
            <div
                style={{
                    textAlign: "center",
                    color: "white",
                    backgroundColor: "deeppink",
                }}>B</div>
        </Grid>
        <Grid item xs={1} sm={1} md={2} lg={3} xl={4} key="3">
            <div
                style={{
                    textAlign: "center",
                    color: "white",
                    backgroundColor: "hotpink",
                }}>C</div>
        </Grid>
    </Grid>
);

function DemoItem({ ...props }) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100px",
            minWidth: "100px",
            color: "white",
            backgroundColor: "gray",
        }}>{props.text}</div>
    );
}

export const FluidGrid = () => (
    <Grid container spacing={2}>
        <Grid item xs={8}>
            <DemoItem text={"xs=8"} />
        </Grid>
        <Grid item xs={4}>
            <DemoItem text={"xs=4"} />
        </Grid>
        <Grid item xs={4}>
            <DemoItem text={"xs=4"} />
        </Grid>
        <Grid item xs={8}>
            <DemoItem text={"xs=8"} />
        </Grid>
    </Grid>
);

export const DynamicFluidGrid = () => (
    <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
            <DemoItem text={"xs=6 | md=8"} />
        </Grid>
        <Grid item xs={6} md={4}>
            <DemoItem text={"xs=6 | md=4"} />
        </Grid>
        <Grid item xs={6} md={4}>
            <DemoItem text={"xs=6 | md=4"} />
        </Grid>
        <Grid item xs={6} md={8}>
            <DemoItem text={"xs=6 | md=8"} />
        </Grid>
    </Grid>
);

export const NestedGrid = () => (
    <Grid container spacing={1}>
        <Grid container item spacing={3}>
            <Grid item xs={4}>
                <DemoItem text="A1" />
            </Grid>
            <Grid item xs={4}>
                <DemoItem text="B1" />
            </Grid>
            <Grid item xs={4}>
                <DemoItem text="C1" />
            </Grid>
        </Grid>
        <Grid container item spacing={3}>
            <Grid item xs={4}>
                <DemoItem text="A2" />
            </Grid>
            <Grid item xs={4}>
                <DemoItem text="B2" />
            </Grid>
            <Grid item xs={4}>
                <DemoItem text="C2" />
            </Grid>
        </Grid>
        <Grid container item spacing={3}>
            <Grid item xs={4}>
                <DemoItem text="A3" />
            </Grid>
            <Grid item xs={4}>
                <DemoItem text="B3" />
            </Grid>
            <Grid item xs={4}>
                <DemoItem text="C3" />
            </Grid>
        </Grid>
    </Grid>
);
export const GridColumns = () => (
    <Grid container item direction={'row'} alignItems={'stretch'} columns={8} spacing={4}>
        <Grid item xs={8} md={6}>
            <DemoItem text="xs=8 | md=6" />
        </Grid>
        <Grid item xs={4} md={6}>
            <DemoItem text="xs=4 | md=6" />
        </Grid>
    </Grid>
);
