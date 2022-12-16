import React from 'react';
import Button from '@mui/material/Button';

export const TextButton = (props) =>  {
    
    const contentHandler = () => {
        return props.action(props.content)
    }
    
    return (
        <Button
            onClick={contentHandler}
            >{props.children}
        </Button>
    )
}