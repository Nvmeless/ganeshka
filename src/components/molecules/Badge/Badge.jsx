import React from "react";
import PropTypes from 'prop-types';
import Icon from '../../atoms/Icon/Icon'

export const Badge = ({backgroundColor, height, width,...props}) => {

  return (
        <div className={['badge', props?.className].join(' ')} 
        style={
            {
                ...{
                    width : width || null,
                    height : height || null,
                    backgroundColor : backgroundColor || "white"
                },
                ...props?.style
            }
        }>
            {
                <Icon icon={"Bs/BsFilAlarmFill"} size="2em" color="black" />
            }
        </div>
    )
}