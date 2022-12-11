import React from 'react';

import SpeedDialIcon from "../../../components/atoms/SpeedDialIcon/SpeedDialIcon";

export default {
    title:"Atoms/test/SpeedDialIcon",
    component: SpeedDialIcon,
    argType: {
        backgroundColor: {control: 'color'}
    },
}

const Template = (args) =><SpeedDialIcon {...args}/>

export const Primary = Template.bind({});
Primary.args = {

}
