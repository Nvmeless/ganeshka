import React, { useContext, useMemo } from "react";
import { AccordionContext } from "../../molecules/Accordion/Accordion";
const AccordionDetails = ({ children, className = "" }) => {
    const { hash, transition, active } = useContext(AccordionContext);
    const TagName = useMemo(() => {
        return "div";
    }, []);
    const transitionData = useMemo(() => {
        const defaultData = {
            duration: "300ms",
            timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
        };
        if (transition && ("duration" in transition) && transition.duration) {
            defaultData.duration = transition.duration;
        }
        if (transition && ("timingFunction" in transition) && transition.timingFunction) {
            defaultData.timingFunction = transition.timingFunction;
        }
        return defaultData;
    }, [transition]);
    const style = () => {
        return {
            maxHeight: "0px",
            transitionProperty: "max-height",
            overflow: "hidden",
            textAlign: 'left',
            padding: active ? "16px" : "0px",
            transitionDuration: transitionData.duration,
            transitionTimingFunction: transitionData.timingFunction,
        }        
    };

    return (<TagName id={`content-${hash}`} aria-labelledby={`button-${hash}`} className={className} style={{
            ...style(),
        }}>
            {children}
        </TagName>);
};
export default AccordionDetails;
