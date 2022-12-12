import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';

export const ButtonAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, backgroundColor: '#87D98E' }}>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="hhat"
            sx={{ mr: 2 }}
          >
            <ChatIcon />
          </IconButton>
         <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="search"
            sx={{ mr: 2, flexGrow: 1 }}
          >
            <SearchIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}