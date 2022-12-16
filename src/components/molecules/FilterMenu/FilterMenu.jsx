import React from "react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const FilterMenu =({changeContent, menus, sx}) => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const contentHandler1 = () => {
        return changeContent(menus[0].content)
    }

    const contentHandler2 = () => {
        return changeContent(menus[1].content)
    }

    // const generateMenu = () => {  
    //     return menus.map((menu, i) => {
    //         return <Tab key={i} onClick={contentHandler(menu.content)} label={menu.label}></Tab>
    //     })
    // }

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs
        sx={sx}
              value={value}
              onChange={handleChange}
              centered>
          <Tab sx={{ mr: 2 }} onClick={contentHandler1} label={<span style={{ color: 'black' }}>{menus[0].label}</span>} />
          <Tab sx={{ ml: 2 }} onClick={contentHandler2} label={<span style={{ color: 'black' }}>{menus[1].label}</span>} />
          {/* {generateMenu()} */}
        </Tabs>
      </Box>
    )
}