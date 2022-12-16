import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default class ButtonAppBar extends React.Component {

    render() {
        return (
          <Box sx={{ flexGrow: 1 }}>
          <AppBar position={this.props.position} sx={this.props.sx}>
            <Toolbar>
            {this.props.children}
            </Toolbar>
          </AppBar>
        </Box>
        )
    }
}