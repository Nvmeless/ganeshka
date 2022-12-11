import React from "react";
import PropTypes from 'prop-types';
import './style.css';

export const Tab = ({label, value, icon, iconPosition, disabled, onClick, ...props}) => {

    const iconPositionClass = iconPosition ? `iconPosition--${iconPosition}` : 'iconPosition--top'

    return (
        <li 
            className={['tab', props?.className].join(' ')} 
            role="tab" 
            disabled={disabled} 
            value={value} 
            onClick={onClick}
        >
            <div className={[iconPositionClass, props?.className].join(' ')}>
                <span className="tabLabel">{label}</span>
                {
                    icon ? <span className="tabIcon">{icon}</span> : null 
                }
            </div>
        </li>
    )
}

Tab.propTypes ={ 
    /**
     * Which label is used for Tab
     */
    label: PropTypes.string,
    /**
     * Which value is used for Tab
     */
    value: PropTypes.number,
    /**
     * Which icon is used for Tab
     */
    icon: PropTypes.string,
    /**
     * Which iconPosition is used for Tab
     * Default is top
     */
    iconPosition: PropTypes.oneOf(['top', 'start', 'end', 'bottom']),
    /**
     * Is disabled ?
     */
    disabled: PropTypes.bool,

}

Tab.defaultProps = {
    label: "Item",
    value: null,
    disabled: false,
}