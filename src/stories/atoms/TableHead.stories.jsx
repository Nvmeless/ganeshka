import React from "react";

import { TableHead } from "../../components/atoms/TableHead/TableHead"; 

export default {
    title:"Atoms/TableHead",
    component: TableHead,
    argType: {
        backgroundColor: {control: 'color'}
    },
}

const Template = (args) => <TableHead {...args}/>

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