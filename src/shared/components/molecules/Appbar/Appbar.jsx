import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import { AccountCircle, CoPresent, Diversity3, FitnessCenter } from '@mui/icons-material';
import { StyledAppbar } from "./styles";

export const Appbar = ({...props}) => {

    const [value, setValue] = useState()
    // const theme = useTheme();
    // console.log("Theme", theme)
    return( 
        <StyledAppbar>
            <BottomNavigation {...props} value={value} onChange={(event, newValue) => {setValue(newValue)}}>
                <BottomNavigationAction label="Students" icon={<Diversity3 />} />
                <BottomNavigationAction label="Lessons" icon={<CoPresent />} />
                <BottomNavigationAction label="Modules" icon={<FitnessCenter />} />
                <BottomNavigationAction label="Account" icon={<AccountCircle />} />
            </BottomNavigation>
        </StyledAppbar>
    )
}