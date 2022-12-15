import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import { AccountCircle, CoPresent, Diversity3, FitnessCenter } from '@mui/icons-material';
import { StyledAppbar } from "./styles";

export const Appbar = ({...props}) => {

    const [link, setLink] = useState()

    return( 
        <StyledAppbar>
            <div className="App">Parcours Sportifs</div>
            <BottomNavigation {...props} value={link} onChange={(event, newLink) => {setLink(newLink)}}>
                <BottomNavigationAction value="students" label="Students" icon={<Diversity3 />} />
                <BottomNavigationAction value="lessons"  label="Lessons"  icon={<CoPresent />} />
                <BottomNavigationAction value="modules"  label="Modules"  icon={<FitnessCenter />} />
                <BottomNavigationAction value="account"  label="Account"  icon={<AccountCircle />} />
            </BottomNavigation>
        </StyledAppbar>
    )
}