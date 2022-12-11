import React from 'react';
import {SpeedDial} from '../../components/molecules/SpeedDial/SpeedDial';
import SpeedDialIcon from "../../components/atoms/SpeedDialIcon/SpeedDialIcon";
import SpeedDialAction from "../../components/atoms/SpeedDialAction/SpeedDialAction";

import { FaBeer,FaAccessibleIcon,Fa500Px,FaAcquisitionsIncorporated } from 'react-icons/fa';

const children1 = <SpeedDialAction
    key={"Copy"}
    icon={<FaBeer/>}
    tooltipTitle={"Copy"}
    tooltipPlacement={"left"}/>



export default {
    title:"Molecules/SpeedDial",
    component: SpeedDial,
    argType: {
        backgroundColor: {control: 'color'}
    },
}

const Template = (args) =><SpeedDial {...args}/>

export const Primary = Template.bind({});
Primary.args = {

}
