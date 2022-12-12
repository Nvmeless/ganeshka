import { Modal } from "../../components/molecules/Modal/Modal";
import React, { useState } from "react";

export default {
    title:"Molecules/Modal",
    component: Modal
}


const Template = (args) => {

    const [open, setOpen] = useState(false)

    return <>
           <Modal {...args} open={open} onClose={() => {setOpen(false)}} >Ceci est un test <button>Premier bouton</button> <button>Deuxième bouton</button></Modal>
           <button onClick={() => {setOpen(true)}}>Ouvrir le modal</button>
            </> 
}

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    disableEscapeKeyDown: false,
    disablePortal: false,
    disableAutoFocus: false,
    disableEnforceFocus: false,
    disableRestoreFocus: false,
    disableScrollLock: false,
    hideBackdrop: false,
    keepMounted: false,
    loading: false,

}  
export const Secondary = Template.bind({});
Secondary.args = {
    primary: false,
    disableEscapeKeyDown: false,
    disablePortal: false,
    disableAutoFocus: false,
    disableEnforceFocus: false,
    disableRestoreFocus: false,
    disableScrollLock: false,
    hideBackdrop: false,
    keepMounted: false,
    loading: false,

}  

export const isLoading = Template.bind({});
isLoading.args = {
    disableEscapeKeyDown: false,
    disablePortal: false,
    disableAutoFocus: false,
    disableEnforceFocus: false,
    disableRestoreFocus: false,
    disableScrollLock: false,
    hideBackdrop: false,
    keepMounted: false,
    loading: true,
}  