import React from "react";
import '../../App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from '../../themes/default.js';
import {Menu} from '../molecules/Menu/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
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
      return <p>Hello few</p>
    }
  }

    render(){
        return(
            <ThemeProvider theme={getTheme()}>
        <div className="App">
          Ganeshka toolkit
        </div>
        {this.renderContent(this.state.content)}
        {/* {this.state ? <p>{this.state.content}</p> : <p>Hello few</p>} */}
        <Menu changeContent={this.changeContent} menus={[
            {size:"large", edge:"start", color:"black", label:"menu", sx:{ mr: 2 }, icon :(<ChatIcon/>), content:"Chat"},
            {size:"large", edge:"start", color:"black", label:"search", sx:{ mr: 2, flexGrow: 1 }, icon :(<SearchIcon/>), content:"Search"},
            {size:"large", edge:"start", color:"black", label:"chat", sx:{ mr: 2 }, icon :(<MenuIcon/>), content:"Menu"}
        ]}></Menu>
        </ThemeProvider>
            )
    }
}
