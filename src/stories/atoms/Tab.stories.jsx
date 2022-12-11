import React from "react";

import {Tab } from '../../components/atoms/Tab/Tab'

export default {
    title:"Atoms/Tab",
    component: Tab,
}

const Template = (args) => <Tab {...args}/>

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