import React from 'react';
import {Container} from '../../components/atoms/Container/Container';

export default {
    title:"Atoms/Container",
    component: Container,
    argType: {
        backgroundColor: {control: 'color'}
    },
}

const Template = (args) => <Container {...args}/>

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
