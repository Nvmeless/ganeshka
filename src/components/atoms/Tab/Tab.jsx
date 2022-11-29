import React from "react";
import PropTypes from 'prop-types';
import './style.css';
export const Tab = ({label, value, icon, iconPosition, disabled, selected, ...props}) => {

    const tabselected = selected ? 'selected' : '';
    const iconPositionClass = iconPosition ? `iconPosition--${iconPosition}` : 'iconPosition--top'

    console.log(iconPosition);

    return (
        <button className={['tab', tabselected, props?.className].join(' ')} role="tab" disabled={disabled} value={value}>
            <div className={[iconPositionClass, props?.className].join(' ')}>
                <span className="tabLabel">{label}</span>
                <span className="tabIcon">{icon}</span>
            </div>
        </button>
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
    value: PropTypes.string,
    /**
     * Which icon is used for Tab
     */
    icon: PropTypes.string,
    /**
     * Which iconPosition is used for Tab
     */
    iconPosition: PropTypes.oneOf(['top', 'start', 'end', 'bottom']),
    /**
     * Is disabled ?
     */
    disabled: PropTypes.bool,
    /**
     * Is selected ?
     */
    selected: PropTypes.bool,

}

Tab.defaultProps = {
    label: "Item",
    value: null,
    disabled: false,
}