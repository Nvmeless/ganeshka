import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import { Box, Typography } from "@mui/material";

export const TabPanel = ({children, value, index, ...props}) => {
    
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...props}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography align="left">{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
