import React from "react";
import PropTypes from 'prop-types';
import {Card} from "../Card/Card"
import { Button } from "@mui/material";
//jinn#4465

export const Select = ({backgroundColor,...props}) => {
    return (
        <Card width="160px">
            TextSelecteur
            <Button variant="text">V</Button>
        </Card>
    )
    
}

Select.defaultProps = {
     /**
     * Which color is used for background
     */
      backgroundColor: PropTypes.string,
}

Select.defaultProps = {
    backgroundColor: null
}