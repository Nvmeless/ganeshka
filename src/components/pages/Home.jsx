import React from "react";
import '../../App.css';
import { ThemeProvider } from 'styled-components';
import { getTheme } from '../../themes/default.js';
import { Menu } from '../molecules/Menu/Menu';
import HomeFilter from '../organisms/HomeFilter/HomeFilter'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import Divider from '@mui/material/Divider';
import { ProductList } from "../organisms/ProductList/ProductList";
import { MerchantList } from "../organisms/MerchantList/MerchantList";

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
      case "Product":
        return <p>Product Map</p>

      case "ProductList":
        return <ProductList></ProductList>

      case "Shops":
        return <p>Shops Map</p>

      case "ShopsList":
        return <MerchantList></MerchantList>

      case "Menu":
        return <p>Menu</p>

      case "Search":
        return <p>Search</p>

      case "Chat":
        return <p>Chat</p>


      default:
        return <p>Welcome home</p>
    }
  }

  render() {
    return (
      <ThemeProvider theme={getTheme()}>
        <HomeFilter  changeContent={this.changeContent} nameContent={this.state.content}>
          <p>Liste des produits proches de moi</p>
          <Divider></Divider>
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
  }
}