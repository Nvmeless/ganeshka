import React from "react";

export const ElementList = ({...props}) => {
    
    const { changed, id, isSelected, label, value } = props;


    return (
        <div>
            <input
                id={id}
                onChange={changed}
                value={value}
                type="radio"
                checked={isSelected}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}