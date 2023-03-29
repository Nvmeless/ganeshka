import React from "react";
import '../../App.css';
import { ThemeProvider } from 'styled-components';
import { getTheme } from '../../themes/default.js';
import { Menu } from '../molecules/Menu/Menu';
import HomeFilter from '../organisms/HomeFilter/HomeFilter'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Divider from '@mui/material/Divider';
import { ProductList } from "../organisms/ProductList/ProductList";
import { MenuButton } from "../atoms/MenuButton/MenuButton";
import { AddProductForm } from "../organisms/AddProductForm/AddPoductForm";
import { MerchantList } from "../organisms/MerchantList/MerchantList";
import { store } from '../../app/store';
import {Login} from './Login/Login';
import {Deconnection} from '../molecules/Deconnection/Deconnection';
import { MerchantMap } from '../organisms/MerchantMap/MerchantMap';
import { AddMerchantForm } from "../organisms/AddMerchantForm/AddMerchantForm";


export default class Home extends React.Component {


  constructor(props) {
    super(props)
    this.state = { content: "" }
    this.changeContent = this.changeContent.bind(this);
  }

  changeContent(content) {
    this.setState({ content: content });
  }

  renderContent(state) {
    switch (state) {

      case "ProductList":
        return <ProductList></ProductList>


      case "ShopsList":
        return <MerchantMap></MerchantMap>

      case "Menu":
        return <><MenuButton action={this.changeContent} content="Add Product" size="large" edge="start" color="black" label="add product" sx={{mr : 2}}>{<AddBoxIcon/>}Ajouter un produit</MenuButton>
        <MenuButton action={this.changeContent} content="Add Merchant" size="large" edge="start" color="black" label="add merchant" sx={{mr : 2}}>{<AddBoxIcon/>}Ajouter un marchand</MenuButton><Deconnection></Deconnection></>

      case "Search":
        return <p>Search</p>

      case "Chat":
        return <p>Chat</p>

      case "Add Product":
        return <AddProductForm></AddProductForm>


      case "Add Merchant":
        return <AddMerchantForm></AddMerchantForm>

      default:
        return <ProductList></ProductList>
    }
  }

  isConnect() {
    var states = store.getState()
    return states.auth.isLoggedIn
  }

  generateApp(){
    // if (this.isConnect()) {
      return (
        <ThemeProvider theme={getTheme()}>
          <HomeFilter changeContent={this.changeContent} nameContent={this.state.content}>
            {this.renderContent(this.state.content)}
            <Divider></Divider>
          </HomeFilter>



          <Menu changeContent={this.changeContent} menus={[
            { size: "large", edge: "start", color: "black", label: "chat", sx: { mr: 2 }, icon: (<MenuIcon />), content: "Menu" },
            { size: "large", edge: "start", color: "black", label: "search", sx: { mr: 2, flexGrow: 1 }, icon: (<SearchIcon />), content: "Search" },
            { size: "large", edge: "start", color: "black", label: "menu", sx: { mr: 2 }, icon: (<ChatIcon />), content: "Chat" }
          ]} position={"fixed"} sx={{ top: 'auto', bottom: 0, backgroundColor: '#87D98E' }}></Menu>

        </ThemeProvider>
      )
    // } else {
    //   return <Login></Login>
    // }
  }

  render() {

    return this.generateApp()
      
}
}