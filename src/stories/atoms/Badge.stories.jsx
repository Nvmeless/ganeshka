import React from "react";

import {Badge } from '../../components/atoms/Badge/Badge'
import Icon from "../../components/atoms/Icon/Icon";

export default {
    title:"Atoms/Badge",
    component: Badge,
    argType: {
        backgroundColor: {control: 'color'},
        badgeBackground: {control: 'color'},
    },
}

const Template = (args) =>  <Badge {...args}> 
                             <Icon icon={"Ai/AiFillMail"} size={50} color={"black"} />
                            </Badge>
                            

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    loading: false,
    badgeContent: 9,
    width: 50,
    height: 50,

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