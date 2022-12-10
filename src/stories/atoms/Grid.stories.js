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
        spacing: {
            control: {
                type: "select",
                options: [null, 0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            },
        },
        columns: {
            control: {
                type: "select",
                options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            },
        },
        direction: {
            control: {
                type: "select",
                options: ["row", "row-reverse", "column", "column-reverse"],
            },
        },
        justifyContent: {
            control: {
                type: "select",
                options: ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"],
            },
        },
        alignItems: {
            control: {
                type: "select",
                options: ["stretch", "center", "flex-start", "flex-end", "baseline"],
            },
        },
        wrap: {
            control: {
                type: "select",
                options: ["nowrap", "wrap", "wrap-reverse"],
            },
        },
        rowSpacing: {
            control: {
                type: "select",
                options: [null, 0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            },
        },
        columnSpacing: {
            control: {
                type: "select",
                options: [null, 0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            },
        },
        // children: { type: "number", defaultValue: 4 },
    },


};

// const GridTemplate = ({ children, ...args }) => (
//     <Grid container {...args} style={{
//         width: "100%",
//         height: "500px",
//     }}>
//         {[...Array(children).keys()].map(n => (
//             <Grid item key={n}>
//                 <div
//                     style={{
//                         width: "50px",
//                         height: "50px",
//                         backgroundColor: "#" + ((1 << 24) * Math.random() | 0).toString(16), // random color
//                     }}
//                 >
//                     {n + 1}
//                 </div>
//             </Grid>
//         ))}
//     </Grid>
// );


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

export const FluidGrid = () => (
    <Grid container spacing={2}>
        <Grid item xs={8}>
            <div style={{
                textAlign: "center",
                color: "white",
                backgroundColor: "gray",
            }}>xs=8</div>
        </Grid>
        <Grid item xs={4}>
            <div style={{
                textAlign: "center",
                color: "white",
                backgroundColor: "gray",
            }}>xs=4</div>
        </Grid>
        <Grid item xs={4}>
            <div style={{
                textAlign: "center",
                color: "white",
                backgroundColor: "gray",
            }}>xs=4</div>
        </Grid>
        <Grid item xs={8}>
            <div style={{
                textAlign: "center",
                color: "white",
                backgroundColor: "gray",
            }}>xs=8</div>
        </Grid>
    </Grid>
);

export const DynamicFluidGrid = () => (
    <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
            <div style={{
                textAlign: "center",
                color: "white",
                backgroundColor: "gray",
            }}>xs=6 md=8</div>
        </Grid>
        <Grid item xs={6} md={4}>
            <div style={{
                textAlign: "center",
                color: "white",
                backgroundColor: "gray",
            }}>xs=6 md=4</div>
        </Grid>
        <Grid item xs={6} md={4}>
            <div style={{
                textAlign: "center",
                color: "white",
                backgroundColor: "gray",
            }}>xs=6 md=4</div>
        </Grid>
        <Grid item xs={6} md={8}>
            <div style={{
                textAlign: "center",
                color: "white",
                backgroundColor: "gray",
            }}>xs=6 md=8</div>
        </Grid>
    </Grid>
);


//TODO: FIXME:
function DemoItem({ ...props }) {
    return (
        <div style={{
            minHeight: "100px",
            minWidth: "100px",
            textAlign: "center",
            color: "white",
            backgroundColor: "gray",
        }}>{props.text}</div>
    );
}

export const NestedGrid = () => (

    <Grid container spacing={1}>
        <Grid container item spacing={3}>
            <Grid item xs={4}>
                <DemoItem text="A" />
            </Grid>
            <Grid item xs={4}>
                <DemoItem text="B" />
            </Grid>
            <Grid item xs={4}>
                <DemoItem text="C" />
            </Grid>
        </Grid>
        <Grid container item spacing={3}>
            <Grid item xs={4}>
                <DemoItem text="A" />
            </Grid>
            <Grid item xs={4}>
                <DemoItem text="B" />
            </Grid>
            <Grid item xs={4}>
                <DemoItem text="C" />
            </Grid>
        </Grid>
        <Grid container item spacing={3}>
            <Grid item xs={4}>
                <DemoItem text="A" />
            </Grid>
            <Grid item xs={4}>
                <DemoItem text="B" />
            </Grid>
            <Grid item xs={4}>
                <DemoItem text="C" />
            </Grid>
        </Grid>
    </Grid>

);
