import React from "react";

import { TabPanel } from '../../components/atoms/TabPanel/TabPanel'

export default {
    title:"Atoms/TabPanel",
    component: TabPanel,
}

const Template = (args) => <TabPanel {...args}/>

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