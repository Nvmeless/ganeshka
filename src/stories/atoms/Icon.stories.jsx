import React from "react";

import Icon from "../../components/atoms/Icon/Icon";

export default {
    title:"Atoms/Icon",
    component: Icon,
    argType: {
        color: {control: 'color'},
    },
}

const Template = (args) =>  <Icon {...args}/>
                            

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    loading: false,
    size: 50,
    icon: 'Ai/AiFillMail',
    color: '#000'

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