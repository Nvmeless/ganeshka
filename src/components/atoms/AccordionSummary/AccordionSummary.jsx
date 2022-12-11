import React, { useRef, useContext, useMemo, useState, useEffect } from "react";
import { AccordionContext } from "../../molecules/Accordion/Accordion";
import KeyboardArrowDown from './KeyboardArrowDown.svg';
import './style.css';
const AccordionSummary = ({ children, className = "input" }) => {
    const { hash, toggle, items, alwaysOpen, active, defaultExpanded, disabled, expanded } = useContext(AccordionContext);
    const ref = useRef(null);
    const [defaultExpandedState, setDefaultExpandedState] = useState(defaultExpanded);
    const TagName = useMemo(() => {
        return "div";
    }, []);

    useEffect(() => {
        const toggleButton = (button) => {
            let ariaExpanded = button.getAttribute('aria-expanded');
            button.setAttribute('aria-expanded', ariaExpanded === "false" ? "true" : "false");
        };
        const toggleContent = (content) => {
            if (content) {
                const transitionEnd = () => {
                    if (content.style.maxHeight !== "0px") {
                        content.style.maxHeight = "none";
                    }
                    content.removeEventListener('transitionend', transitionEnd);
                };
                content.addEventListener('transitionend', transitionEnd);
                if (content.style.maxHeight === "0px") {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
                else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    content.style.maxHeight = content.scrollHeight + "px";
                    content.style.maxHeight = "0px";
                }
            }
        };
        if (ref && ref.current) {
            const button = ref?.current;
            const showAccordion = (e) => {
                // Pervent default
                if(!disabled) {

                    if (TagName === "a") {
                        e.preventDefault();
                    }
                    toggle();
                    
                    // Toggle Button
                    toggleButton(button);
                    // Toggle Content
                    const content = document.querySelector(`#${button.getAttribute('aria-controls')}`);
                    toggleContent(content);

                }
            };
            if(defaultExpandedState) {
                showAccordion();
                setDefaultExpandedState(false);
            }
            if (button) {
                button.addEventListener('click', showAccordion);
            }
            return () => {
                if (button) {
                    button.removeEventListener('click', showAccordion);
                }
            };
        }
        return () => { };
    }, [TagName, alwaysOpen, items, toggle, setDefaultExpandedState, defaultExpandedState, disabled]);
    const style = () => {
        return {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0px 16px',
        }
    };

    return (
        <TagName ref={ref}  id={`button-${hash}`} aria-expanded="false" className={className} aria-controls={`content-${hash}`} style={{ ...style(), }}>
            {children}
            <img alt="" width="16" height="16" src={KeyboardArrowDown} className="arrow-down" style={{
                ...{
                    color: "rgba(0, 0, 0, 0.54)",
                    transform: active ? "rotate(180deg)" : "rotate(0deg)",
                }
            }}></img>
        </TagName>
    );
};

export default AccordionSummary;