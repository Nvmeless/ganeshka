import React from "react";

import {CheckBox } from '../../components/atoms/CheckBox/CheckBox'

export default {
    title:"Atoms/CheckBox",
    component: CheckBox,
    argType: {
        backgroundColor: {control: 'color'}
    },
}

const Template = (args) => <CheckBox {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    loading: false,

}  
export const Secondary = Template.bind({});
Secondary.args = {
    primary: false,
    loading: false,

}  

export const isLoading = Template.bind({});
isLoading.args = {
    loading: true,
}  