import React from "react";
import '../../App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from '../../themes/default.js';
import {Menu} from '../molecules/Menu/Menu';
import {FilterMenu} from '../molecules/FilterMenu/FilterMenu'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import Drawer from '../molecules/Drawer/Drawer'
import Divider from '@mui/material/Divider';

export default class Home extends React.Component {

  constructor(props){
      super(props)
      this.state = {content:""}
      this.changeContent = this.changeContent.bind(this);
  }

  changeContent(content){
      this.setState({content: content});
  }

  renderContent(state){
    if (state) {
      return <p>{state}</p>
    } else {
      return <p>Welcome Home</p>
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
        <Divider></Divider>
        {this.renderContent(this.state.content)}
        {/* <Drawer></Drawer> */}
        <Divider></Divider>
        <FilterMenu changeContent={this.changeContent} menus={[
            {label:"map", content:"Map"},
            {label:"list", content:"List"},
        ]} sx={{ position: 'absolute', bottom: 0, mb: 8, ml: 10, mt: 1.5, "& .MuiTabs-indicator": { backgroundColor: 'white'}, "& button": {borderRadius: 10}, "& button.Mui-selected": {backgroundColor: 'lightgray'}}}></FilterMenu>
        <Menu changeContent={this.changeContent} menus={[
            {size:"large", edge:"start", color:"black", label:"chat", sx:{ mr: 2 }, icon :(<MenuIcon/>), content:"Menu"},
            {size:"large", edge:"start", color:"black", label:"search", sx:{ mr: 2, flexGrow: 1 }, icon :(<SearchIcon/>), content:"Search"},
            {size:"large", edge:"start", color:"black", label:"menu", sx:{ mr: 2 }, icon :(<ChatIcon/>), content:"Chat"}
        ]} position={"fixed"} sx={{ top: 'auto', bottom: 0, backgroundColor: '#87D98E' }}></Menu>
        </ThemeProvider>
            )
    }
}
