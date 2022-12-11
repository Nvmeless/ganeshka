import React from "react";
import PropTypes from 'prop-types';
import './style.css';

export const Tabs = ({ children }) => {

    // CODE À METTRE DANS LE COMPOSANT OU EST APPELLÉ LE COMPOSANT TABS :
    
    // const [value, setValue] = useState(0)
    // const handleClick = (newValue) => {
    //     setValue(newValue);
    // };

    return (
        <div>
            <ul className="tab-list" >
                {children}
            </ul> 
        </div>
    )
}

Tabs.propTypes ={ 
    children: PropTypes.node,
    value: PropTypes.number.isRequired, 
}