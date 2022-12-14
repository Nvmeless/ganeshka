import React from "react";
import {Avatar } from '../../components/atoms/Avatar/Avatar'
import {ReactImg } from '../../components/atoms/Avatar/AvatarDefaultImage.png'

export default {
    title:"Atoms/Avatar",
    component: Avatar
}

const TemplateDefault = (args) => <Avatar {...args}></Avatar>

export const defaultAvatar = TemplateDefault.bind({});

defaultAvatar.args = {
    size: 50
}  

const TemplateLetters = (args) => <Avatar  {...args}>John Smith</Avatar>
export const LettersAvatar = TemplateLetters.bind({});

LettersAvatar.args = {
    size: 50
}  

const TemplateImage = (args) => <Avatar  {...args}></Avatar>
export const ImageAvatar = TemplateImage.bind({});

ImageAvatar.args = {
    size: 50,
    src: ReactImg,
    bgColor: "black",
    borderRadius: 10
}  

