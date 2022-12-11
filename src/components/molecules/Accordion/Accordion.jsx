import React, { createContext, useMemo, useEffect, useRef, useState } from "react";
import './style.css';
import PropTypes from 'prop-types';
export const AccordionContext = createContext({
    accordionRef: null,
    active: false,
    hash: "",
    transition: null,
    alwaysOpen: false,
    toggle: () => { },
    isActive: false,
    defaultExpanded: false,
    disabled: false,
    expanded: false,
});
export const Accordion = ({ isActive = false, children, className = "", transition = undefined, alwaysOpen = false, width, height, square = false, backgroundColor = 'white', defaultExpanded ,expanded, disabled, ...props }) => {
    const accordionRef = useRef(null);
    const [active, setActive] = useState(false);
    const hash = useMemo(() => {
      return Math.random().toString(36).substring(2, 9);
    }, []);
    const TagName = useMemo(() => {
        return "div";
    }, []);
    const value = useMemo(() => {
        return {
            accordionRef,
            active,
            hash,
            isActive,
            toggle: () => setActive(!active),
            transition,
            alwaysOpen,
            defaultExpanded,
            disabled,
            expanded
        };
    }, [hash, active, alwaysOpen, isActive, transition, defaultExpanded, disabled, expanded]);
    className = []
    const style = () => {
      return {
          backgroundColor: disabled ? 'rgba(0, 0, 0, 0.12)' : backgroundColor,
          border: '1px solid #e0e0e0',
          borderRadius: square ? '0px' : '5px',
          padding: '16px',
      }
    };
    return (<AccordionContext.Provider value={value}>
            <TagName className={className} 
            style={
              {
                ...style(),
                ...props?.style
            }
            }>
                {children}
            </TagName>
        </AccordionContext.Provider>);
};
export default Accordion;

Accordion.propTypes = {
  /**
   * Override or extend the styles applied to the component. See CSS API below for more details.
   */
  classes: PropTypes.object,
  /**
   * If true, expands the accordion by default. TODO
   */
  defaultExpanded: PropTypes.bool,
  /**
   * If true, expands the accordion by default.
   */
  disabled: PropTypes.bool,
  /**
  * Is rounded ? 
  */
  square: PropTypes.bool,
  /**
   * 	If true, expands the accordion, otherwise collapse it. Setting this prop enables control over the accordion.
   */
  expanded: PropTypes.bool,
  /**
   * Default activation state
   */
  isActive: PropTypes.bool,

}

Accordion.defaultProps = {
  rounded: false,
  shadow: 1,
  isActive: true,
}