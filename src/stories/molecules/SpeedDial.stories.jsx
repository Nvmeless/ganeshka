import React from 'react';
import {SpeedDial} from '../../components/molecules/SpeedDial/SpeedDial';
import SpeedDialIcon from "../../components/atoms/SpeedDialIcon/SpeedDialIcon";
import SpeedDialAction from "../../components/atoms/SpeedDialAction/SpeedDialAction";

import { FaBeer } from 'react-icons/fa';

const children1 = <SpeedDialAction
    key={"Copy"}
    icon={<FaBeer/>}
    tooltipTitle={"Copy"}
    tooltipPlacement={"left"}/>



export default {
    title:"Molecules/SpeedDial",
    component: SpeedDial,
    argType: {
    },
}

const Template = (args) =><SpeedDial {...args}></SpeedDial>


export const Primary = Template.bind({});
Primary.args = {
    ariaLabel: "test",
    children: [children1,children1,children1,children1],
    classes: {},
    direction: "up",
    FabProps: {size:"medium"},
    icon: <SpeedDialIcon/>,
    open: true,
    hidden: false,
    onClose: ()=>{console.log("close")},
    onOpen: ()=>{console.log("open")},
    sx: {},
    tooltipOpen: false,
    loading: false,
    SpeedDial:()=>{console.log("SpeedDial rendu")},
}


export const Secondary = Template.bind({});
Secondary.args = {
    ariaLabel: "test",
    children: [children1,children1,children1,children1],
    classes: {},
    direction: "up",
    FabProps: {size:"medium",color:"secondary"},
    icon: <SpeedDialIcon/>,
    open: true,
    hidden: false,
    onClose: ()=>{console.log("close")},
    onOpen: ()=>{console.log("open")},
    sx: {},
    tooltipOpen: false,
    loading: true,
    SpeedDial:()=>{console.log("SpeedDial rendu")},
}

export const loading = Template.bind({});
loading.args = {
    ariaLabel: "test",
    children: [children1,children1,children1,children1],
    classes: {},
    direction: "up",
    FabProps: {size:"medium"},
    icon: <SpeedDialIcon/>,
    open: true,
    hidden: false,
    onClose: ()=>{console.log("close")},
    onOpen: ()=>{console.log("open")},
    sx: {},
    tooltipOpen: false,
    loading: true,
    SpeedDial:()=>{console.log("SpeedDial rendu")},
}
