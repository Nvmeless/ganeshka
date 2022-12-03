import React from "react";

import {Rating } from '../../components/atoms/Rating/Rating'

export default {
    title:"Atoms/Rating",
    component: Rating,
    argType: {
        backgroundColor: {control: 'color'}
    },
}

const Template = (args) => <Rating {...args}/>

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