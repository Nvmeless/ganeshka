import React from 'react';
import {Drawer} from '../../components/molecules/Drawer/Drawer';
import {getTheme} from '../../themes/default.js';

export default {
    title:"Molecules/Drawer",
    component: Drawer,
    argType: {
        backgroundColor: {control: 'color'}
    },
}

const Template = (args) => <Drawer {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    backgroundColor: getTheme().primary,
    loading: false
}

export const Secondary = Template.bind({});
Secondary.args = {
    backgroundColor: getTheme().secondary,
    loading: false
}  

export const isLoading = Template.bind({});
isLoading.args = {
    loading: true
}  