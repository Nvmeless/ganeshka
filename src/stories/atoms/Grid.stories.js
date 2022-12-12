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

    <Grid container {...args} sx={{
        border: "1px solid darkgray",
        backgroundColor: "lightgray",
    }}>
        <Grid item>
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
        <Grid item>
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
        <Grid item>
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
        <Grid item xs={1} sm={1} md={2} lg={3} xl={4}>
            <div
                style={{
                    textAlign: "center",
                    color: "white",
                    backgroundColor: "red",
                }}>A</div>
        </Grid>
        <Grid item xs={1} sm={1} md={2} lg={3} xl={4}>
            <div
                style={{
                    textAlign: "center",
                    color: "white",
                    backgroundColor: "deeppink",
                }}>B</div>
        </Grid>
        <Grid item xs={1} sm={1} md={2} lg={3} xl={4}>
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
    props.position = props.position ?? "center";
    return (
        <div style={{
            display: "flex",
            justifyContent: props.position,
            alignItems: "center",
            minHeight: "100px",
            minWidth: "100px",
            color: "black",
            backgroundColor: "lightgray",
            whiteSpace: "nowrap",
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

export const GridAutoLayout = () => (
    <Grid container spacing={3}>
        <Grid item xs>
            <DemoItem text={'xs'} />
        </Grid>
        <Grid item xs={8}>
            <DemoItem text={'xs=8'} />
        </Grid>
        <Grid item xs>
            <DemoItem text={'xs'} />
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs="auto">
                <DemoItem text={'Variable width aaaaaaaaaaaaaa'} />
            </Grid>
            <Grid item xs={8}>
                <DemoItem text={'xs=8'} />
            </Grid>
            <Grid item xs>
                <DemoItem text={'xs'} />
            </Grid>
        </Grid>
    </Grid>
);

export const GridZeroMinWidth = () => {
    const demoText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem risus, dapibus ut congue sit amet, mollis eget est. Nam aliquam neque neque, lacinia malesuada neque sagittis in."

    return (
        <Grid container spacing={2} direction={'column'} >
            <Grid item xs={8} md={6} zeroMinWidth>
                <DemoItem text={demoText} position={"flex-start"} />
            </Grid>
            <Grid item xs={8} md={6}>
                <DemoItem text={demoText} position={"flex-start"} />
            </Grid>
        </Grid>
    );
};

export const GridColumnsWithBreakpoints = () => (
    <Grid container spacing={2} direction={'column'} sx={{ backgroundColor: "darkgray" }} >
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