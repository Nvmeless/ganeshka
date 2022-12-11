import React from "react";

import { Tabs } from '../../components/atoms/Tabs/Tabs'

export default {
    title:"Atoms/Tabs",
    component: Tabs,
}

const Template = (args) => <Tabs {...args}/>

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