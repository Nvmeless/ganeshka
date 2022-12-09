import { Modal } from "../../components/molecules/Modal/Modal";
import React from "react";


export default {
    title:"Molecules/Modal",
    component: Modal
}


const Template = (args) => <Modal {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    open: false,
    disableEscapeDown: false,
    disablePorta: false,
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