import React from "react";
import {Select } from '../../components/atoms/Select/Select'

export default {
    title:"Atoms/Select",
    component: Select,
    argType: {
        backgroundColor: {control: 'color'}
    },
}

const Template = (args) => <Select {...args}/>

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