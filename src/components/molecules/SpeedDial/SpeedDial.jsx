import PropTypes from 'prop-types';
import {Fab} from "@mui/material";
import * as React from "react";
import SpeedDialIcon from "../../atoms/SpeedDialIcon/SpeedDialIcon";
import {StyledContainer} from './styles.js';
import {useEffect, useState} from "react";
import "./styles.css"
import { Zoom } from '@mui/material';
import { AiOutlineLoading } from "react-icons/ai";

const SpeedDial = (props) => {

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if(props?.isRended) {
            props.isRended();
        }
    }, []);


    // hook qui permet d'executer les callback lorsque que le menu est ouvert ou fermé
    useEffect(() => {
            if(menuOpen && props?.onOpen) {
                props.onOpen();
            } else if (props?.onClose) {
                props.onClose();
            }
        }, [menuOpen]);



    const handleOpenMenu = (toOpen) => {
        setMenuOpen(toOpen);
    }

    const handleClik = (event) => {
        event.preventDefault();
        setMenuOpen(!menuOpen);
    }

    const generateMenu = () => {
        return props.children.map((children, i) => {
            return <span key={i} style={
                {transition: (menuOpen ? "all " + 0.1 *i + "s ease-in-out" : "all " +  0.1 * (props.children.length - i) +"s ease-in-out") }
            } className={(menuOpen ? "icon-action-visible" : "icon-action-hide" )} > {updateSpeedDialAction(children)} </span>
        })
    }


    const updateSpeedDialAction = (child) => {
                return React.cloneElement(child, {
                    menuOpen: menuOpen,
                    ariaLabel: props.ariaLabel
                });

}

    const updateChildrenWithProps = React.Children.map(
        props.icon,
        (child, i) => {
            return React.cloneElement(child, {
                menuOpen: menuOpen,
                openIcon: props?.openIcon,
                ariaLabel: props.ariaLabel
            });
        }
    );





    const TransitionComponent = props?.transitionComponent ? props.transitionComponent : Zoom;


    return (<div  style={ {display:"inline-block" ,...props.sx} } id={props.ariaLabel}
        className={["speedDial-component",
            (props.open && !props.hidden ? "speedDial-component-visible" : "speedDial-component-hidden" )].join(" ")}>
            <TransitionComponent
                in={!props?.hidden}
                timeout={props.transitionDuration}
                unmountOnExit
                {...props.TransitionProps}
            >
            <StyledContainer
                style={ { flexDirection: props.direction === 'down' ? 'column' : props.direction === 'right' ? 'row' : props.direction === 'left' ? 'row-reverse' : 'column-reverse' } }
                className={"container-desactivate"} onMouseLeave={() => handleOpenMenu(false)} >
                <div className={"container-activate"}  onMouseEnter={() => { handleOpenMenu(true)}} >
                    <Fab onClick={handleClik}  color="primary" aria-label="add" className={"rotate-icon"}>
                        {props.loading ?<span className={"speedDial-animation-loading-icon"}><AiOutlineLoading></AiOutlineLoading></span> : updateChildrenWithProps}
                    </Fab>
                </div>
                {generateMenu()}
            </StyledContainer>
            </TransitionComponent>
    </div>
)
}



SpeedDial.propTypes = {
    /*
       permet de donner un id au composant et donc de l'identifier
     */
    ariaLabel: PropTypes.string.isRequired,
    /*
      les SpeedDialAction qui seront mis dans cette props
     */
    children: PropTypes.node,
    /*
     *etends les classes du composant speed dial
     */
    classes: PropTypes.object,
    /*direction du speed dial
     */
    direction: PropTypes.oneOf(['down', 'left', 'right', 'up']),
    /*
     propriété appliquer au bouton fab
     */
    FabProps: PropTypes.object,
    /* si true le composant est cahcé
     */
    hidden: PropTypes.bool,
    /*
        icon qui sera afficher dans le bouton par default un speed dial icon
     */
    icon: PropTypes.node,
    /*
      Callback fait quand le composant est fermé
     */
    onClose: PropTypes.func,
    /*
      Callback fait quand le composant est ouvert
     */
    onOpen: PropTypes.func,
    /*
     * si vrai le composant est ouvert
     */
    open: PropTypes.bool,
    /*
      donne l'icone qui s'affiche lorsque le menu est ouvert
     */
    openIcon: PropTypes.node,
    /*
      Ajoute du style css au composant speedDial
     */
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
      PropTypes.func,
      PropTypes.object,
    ]),
    /*
      Composant de transition par default zoom
     @default Zoom
     */
    TransitionComponent: PropTypes.elementType,
    /*
      durre de la trtansition valeur par defaut s'applique au composant de transition
     */
    transitionDuration: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
        appear: PropTypes.number,
        enter: PropTypes.number,
        exit: PropTypes.number,
      }),
    ]),
    /* propriété appliqué au composant de transition*/
    TransitionProps: PropTypes.object,
    /* si vrai alors on met le loader */
    loading: PropTypes.bool,
    /* callback when the component is rendered*/
    isRended: PropTypes.func,
  };

SpeedDial.defaultProps = {
    icon:<SpeedDialIcon></SpeedDialIcon>,
    classes: null,
    open: true,
    direction: 'up',
    hidden: false,
    loading: false,
}

  export default SpeedDial;
