import React, { useState } from "react";
import PropTypes from 'prop-types';
import './style.css';

export const Tabs = ({ children, value }) => {

    return (
        <div>
            <ul className="tab-list" value={value}>
                {children}
            </ul> 
        </div>
    )
}

Tabs.propTypes ={ 
    children: PropTypes.node,
    value: PropTypes.number.isRequired, 
}