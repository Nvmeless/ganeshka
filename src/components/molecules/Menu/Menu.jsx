import React from "react";
import ButtonAppBar from "../AppBarCustom/AppBarCustom"
import {MenuButton} from "../../atoms/MenuButton/MenuButton"

export const Menu =({changeContent,menus}) => {
    const generateMenu = () => {  
        return menus.map((menu, i) => {
            return <MenuButton key={i} action={changeContent} content={menu.content} size={menu.size} edge={menu.edge} color={menu.color} label={menu.label} sx={menu.sx}>{menu.icon ? menu.icon : menu.label}</MenuButton>
        })
    }

    return (
        <ButtonAppBar>
            {generateMenu()}
        </ButtonAppBar>
    )
}