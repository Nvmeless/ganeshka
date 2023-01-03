import React from "react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const FilterMenu =({changeContent, menus, sx, valueprops}) => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const generateMenu = () => {  
        return menus.map((menu, i) => {
            return <Tab sx={{ ml: 2 }} key={menu.label+i} onClick={() => { return changeContent(menu.content)}} label={menu.label}></Tab>
        })
    }

    return (
        <Box sx={{ width: '100%', bgcolor: 'white' }}>
        <Tabs
        sx={sx}
              value={ valueprops ? valueprops : value }
              onChange={handleChange}
              centered>
          {generateMenu()}
        </Tabs>
      </Box>
    )
}