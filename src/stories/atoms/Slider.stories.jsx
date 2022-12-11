import React from 'react';
import {Slider} from '../../components/atoms/Slider/Slider';

export default {
    title:"Atoms/Slider",
    component: Slider,
    argType: {
        colorDown: {control: 'color'},
        colorUp: {control: 'color'}
    },
}

const Template = (args) => <Slider {...args}/>

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