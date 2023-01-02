import React from "react";
import '../../App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from '../../themes/default.js';
import {Menu} from '../molecules/Menu/Menu';
import {FilterMenu} from '../molecules/FilterMenu/FilterMenu'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Divider from '@mui/material/Divider';
import { ProductList } from "../organisms/ProductList/ProductList";
import { MenuButton } from "../atoms/MenuButton/MenuButton";
import { AddProductForm } from "../organisms/AddProductForm/AddPoductForm";

export default class Home extends React.Component {

  constructor(props){
      super(props)
      this.state = {content:""}
      this.changeContent = this.changeContent.bind(this);
  }

  changeContent(content){
      this.setState({content: content});
  }

  renderContent(state) {
    switch (state) {
      case "Map":
        return <p>Map</p>

      case "List":
        return <ProductList></ProductList>

      case "Products":
        return <p>Products</p>

      case "Shops":
        return <p>Shops</p>

      case "Menu":
        return <p>Menu</p>

      case "Search":
        return <p>Search</p>

      case "Chat":
        return <p>Chat</p>

      case "Add Product":
        return <AddProductForm></AddProductForm>


      default:
        return <p>Welcome home</p>
    }
  }

    render(){
        return(
            <ThemeProvider theme={getTheme()}>
        <FilterMenu changeContent={this.changeContent} menus={[
            {label:"products", content:"Products"},
            {label:"shops", content:"Shops"},
        ]} sx={{ mt: 1.5, "& .MuiTabs-indicator": { backgroundColor: 'white'}, "& button": {borderRadius: 10}, "& button.Mui-selected": {backgroundColor: 'lightgray'}}}></FilterMenu>
        <p>Liste des produits proches de moi</p>
        <MenuButton action={this.changeContent} content="Add Product" size="large" edge="start" color="black" label="add product" sx={{mr : 2}}>{<AddBoxIcon/> ? <AddBoxIcon/> : "add product"}</MenuButton>
        <Divider></Divider>
        {this.renderContent(this.state.content)}
        
        <Divider></Divider>
        <FilterMenu changeContent={this.changeContent} menus={[
            {label:"map", content:"Map"},
            {label:"list", content:"List"},
        ]} sx={{ position: 'fixed', bottom: 0, mb: 8, ml: 10, mt: 1.5, "& .MuiTabs-indicator": { backgroundColor: 'white'}, "& button": {borderRadius: 10}, "& button.Mui-selected": {backgroundColor: 'lightgray'}}}></FilterMenu>
        <Menu changeContent={this.changeContent} menus={[
            {size:"large", edge:"start", color:"black", label:"chat", sx:{ mr: 2 }, icon :(<MenuIcon/>), content:"Menu"},
            {size:"large", edge:"start", color:"black", label:"search", sx:{ mr: 2, flexGrow: 1 }, icon :(<SearchIcon/>), content:"Search"},
            {size:"large", edge:"start", color:"black", label:"menu", sx:{ mr: 2 }, icon :(<ChatIcon/>), content:"Chat"}
        ]} position={"fixed"} sx={{ top: 'auto', bottom: 0, backgroundColor: '#87D98E' }}></Menu>
        </ThemeProvider>
            )
    }
}
