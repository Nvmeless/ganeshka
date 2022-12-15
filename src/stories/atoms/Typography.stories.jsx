import React from 'react';
import {Typography} from '../../components/atoms/Typography/Typography';

export default {
    title:"Atoms/Typography",
    component: Typography,
    argType: {
        backgroundColor: {control: 'color'}
    },
}

const Template = (args) => <Typography {...args}/>

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