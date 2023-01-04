import React from 'react';
import { useDispatch } from 'react-redux';
import {logout} from '../../../app/store'
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton';

export const Deconnection = ({...props}) => {
    const dispatch = useDispatch()

    return(
        <IconButton 
            size="large" 
            edge="start" 
            color="black" 
            label="Deconnexion" 
            sx={{ mr: 2 }}
            onClick={() => {
                
                dispatch(logout())
                window.location.reload(true);
              }}>
            {<AddBoxIcon />} Deconnexion
            
        </IconButton>
    )
}