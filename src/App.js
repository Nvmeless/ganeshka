import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tab } from './components/atoms/Tab/Tab';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import { TabPanel } from './components/atoms/TabPanel/TabPanel';
import { Tabs } from './components/molecules/Tabs/Tabs';
import { Box } from '@mui/material';
import { FaAmazon } from 'react-icons/fa';

function App() {
  const [value, setValue] = useState(0)

  const handleClick = (newValue) => {
      setValue(newValue);
  };

  const theme = getTheme();

  return (
    <ThemeProvider theme={getTheme()}>
      <div className="App">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs>
            <Tab label="Item One" onClick={() => handleClick(0)} value={value} index={0} color={theme.primary}/>
            <Tab label="Item Two" onClick={() => handleClick(1)} value={value} index={1} color={theme.primary}/>
            <Tab label="Item Three" onClick={() => handleClick(2)} value={value} index={2} color={theme.primary}/>
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
