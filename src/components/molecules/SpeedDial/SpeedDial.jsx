import PropTypes from 'prop-types';
import {Fab} from "@mui/material";
import * as React from "react";
import SpeedDialIcon from "../../atoms/SpeedDialIcon/SpeedDialIcon";
import {StyledContainer} from './styles.js';
import {useState} from "react";
import "./styles.css"

const SpeedDial = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleOpenMenu = (toOpen) => {
        setMenuOpen(toOpen);
    }

    const generateMenu = () => {
        return props.children.map((children, i) => {
            return <span key={i} style={
                {transition: (menuOpen ? "all " + 0.1 *i + "s ease-in-out" : "all " +  0.1 * (props.children.length - i) +"s ease-in-out") }
            } className={(menuOpen ? "icon-action-visible" : "icon-action-hide" )} > {children} </span>
        })
    }

    const updateChildrenWithProps = React.Children.map(
        props.icon,
        (child, i) => {
            return React.cloneElement(child, {
                menuOpen: menuOpen
            });
        }
    );
    console.log(menuOpen)
    return (<div  style={ {display:"inline-block" } }>
            <StyledContainer className={"container-desactivate"} onMouseLeave={() => handleOpenMenu(false)} >
                <div className={"container-activate"} onMouseEnter={() => { handleOpenMenu(true)}} >
                    <Fab color="primary" aria-label="add" className={"rotate-icon"}>
                        {updateChildrenWithProps}
                    </Fab>
                </div>
                {generateMenu()}
            </StyledContainer>
    </div>
)
}



SpeedDial.propTypes = {
    /**
     * The aria-label of the button element.
     * Also used to provide the `id` for the `SpeedDial` element and its children.
     */
    ariaLabel: PropTypes.string.isRequired,
    /**
     * SpeedDialActions to display when the SpeedDial is `open`.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    /**
     * The direction the actions open relative to the floating action button.
     * @default 'up'
     */
    direction: PropTypes.oneOf(['down', 'left', 'right', 'up']),
    /**
     * Props applied to the [`Fab`](/material-ui/api/fab/) element.
     * @default {}
     */
    FabProps: PropTypes.object,
    /**
     * If `true`, the SpeedDial is hidden.
     * @default false
     */
    hidden: PropTypes.bool,
    /**
     * The icon to display in the SpeedDial Fab. The `SpeedDialIcon` component
     * provides a default Icon with animation.
     */
    icon: PropTypes.node,
    /**
     * @ignore
     */
    onBlur: PropTypes.func,
    /**
     * Callback fired when the component requests to be closed.
     *
     * @param {object} event The event source of the callback.
     * @param {string} reason Can be: `"toggle"`, `"blur"`, `"mouseLeave"`, `"escapeKeyDown"`.
     */
    onClose: PropTypes.func,
    /**
     * @ignore
     */
    onFocus: PropTypes.func,
    /**
     * @ignore
     */
    onKeyDown: PropTypes.func,
    /**
     * @ignore
     */
    onMouseEnter: PropTypes.func,
    /**
     * @ignore
     */
    onMouseLeave: PropTypes.func,
    /**
     * Callback fired when the component requests to be open.
     *
     * @param {object} event The event source of the callback.
     * @param {string} reason Can be: `"toggle"`, `"focus"`, `"mouseEnter"`.
     */
    onOpen: PropTypes.func,
    /**
     * If `true`, the component is shown.
     */
    open: PropTypes.bool,
    /**
     * The icon to display in the SpeedDial Fab when the SpeedDial is open.
     */
    openIcon: PropTypes.node,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
      PropTypes.func,
      PropTypes.object,
    ]),
    /**
     * The component used for the transition.
     * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
     * @default Zoom
     */
    TransitionComponent: PropTypes.elementType,
    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     * @default {
     *   enter: theme.transitions.duration.enteringScreen,
     *   exit: theme.transitions.duration.leavingScreen,
     * }
     */
    transitionDuration: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
        appear: PropTypes.number,
        enter: PropTypes.number,
        exit: PropTypes.number,
      }),
    ]),
    /**
     * Props applied to the transition element.
     * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
     */
    TransitionProps: PropTypes.object,
  };

SpeedDial.defaultProps = {
    icon:<SpeedDialIcon></SpeedDialIcon>,
    classes: null,
    ariaLabel:"yo"
}

  export default SpeedDial;
