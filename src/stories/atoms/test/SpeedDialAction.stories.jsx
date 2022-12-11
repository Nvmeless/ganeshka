import React from 'react';

import SpeedDialAction from "../../../components/atoms/SpeedDialAction/SpeedDialAction";

import { FaBeer,FaAccessibleIcon,Fa500Px,FaAcquisitionsIncorporated } from 'react-icons/fa';

const children1 = <SpeedDialAction
    key={"Copy"}
    icon={<FaBeer/>}
    tooltipTitle={"Copy"}
    tooltipPlacement={"left"}/>



export default {
    title:"Atoms/test/SpeedDialAction",
    component: SpeedDialAction,
    argType: {
        backgroundColor: {control: 'color'}
    },
}

const Template = (args) =><SpeedDialAction {...args}/>

export const Primary = Template.bind({});
Primary.args = {

}
