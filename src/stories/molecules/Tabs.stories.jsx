import React from "react";

import { Tabs } from '../../components/molecules/Tabs/Tabs'

export default {
    title:"Molecules/Tabs",
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