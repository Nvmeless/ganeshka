import React from "react";

import {Card } from '../../components/atoms/Card/Card'

export default {
    title:"Atoms/Card",
    component: Card,
    argType: {
        backgroundColor: {control: 'color'}
    },
}

const Template = (args) => <Card {...args}/>

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