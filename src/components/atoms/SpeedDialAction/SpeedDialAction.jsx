// @inheritedComponent Tooltip
import * as React from 'react';
import PropTypes from 'prop-types';
import { ImFilesEmpty } from "react-icons/im";
import {StyledSpan} from './styles.js';
import {Tooltip} from "@mui/material";
import {Fab} from "@mui/material";
import './styles.css'





const SpeedDialAction = (props) => {
  const transitionStyle = props?.delay ? { transitionDelay: `${props.delay}ms` } : {};
  const fabStyle = props?.FabProps?.style ? { ...props.FabProps.style, ...transitionStyle } : transitionStyle;


    return (
        <div
            className={
              ["SpeedDialAction-component",
                (props.open ? "SpeedDialAction-component-visible " : "SpeedDialAction-component-hidden"),
                props?.classes].join(" ")
            }
            style={{...props.sx}}
            id={props?.id ? props.id : (props?.ariaLabel ? props.ariaLabel : "") +  Math.floor(Math.random() * 1000000).toString()}>
          <Tooltip
              title={props?.tooltipTitle ? props.tooltipTitle : "" }
              classes={props?.TooltipClasses}
              placement={props?.tooltipPlacement}
              open={props.tooltipOpen && props.menuOpen}>
          <Fab {...props?.FabProps}
               style={{
                   ...fabStyle,
               }}>
            <StyledSpan>
              {props.icon}
            </StyledSpan>
          </Fab>
        </Tooltip>
        </div>)
}

SpeedDialAction.propTypes  = {

  /* ajoutes des class sur le speedDialAction */
  classes: PropTypes.object,
  /* ajoute du delay sur l'animation pour le fab composant */
  delay: PropTypes.number,
  /* object qui permet d'envoyer toute les props au composant fab */
  FabProps: PropTypes.object,
  /* icone afficher dans le speedDialAction*/
  icon: PropTypes.node,
  /* id si null un id est g"neré */
  id: PropTypes.string,
  /* si true le composant */
  open: PropTypes.bool,
  /* ajoutes du style  */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
  /* ajouts de classe sur le tooltips */
  TooltipClasses: PropTypes.object,
  /* si le tooltips doit rester ouvert ou non */
  tooltipOpen: PropTypes.bool,
  /* placement  du tooltips */
  tooltipPlacement: PropTypes.oneOf([
    'bottom-end',
    'bottom-start',
    'bottom',
    'left-end',
    'left-start',
    'left',
    'right-end',
    'right-start',
    'right',
    'top-end',
    'top-start',
    'top',
  ]),
  /* label du tooltips */
  tooltipTitle: PropTypes.string,

  /* Aria label envoyé du parent pour fomer les ids */
  ariaLabel: PropTypes.string,

};

SpeedDialAction.defaultProps = {
  FabProps: { size:"small"},
  icon:<ImFilesEmpty></ImFilesEmpty>,
  open:true,
  ariaLabel:null,
  tooltipTitle:"",
  tooltipPlacement:"left",
  delay:0,
  classes:{},
  TooltipClasses:{},
  sx:{},
  id:null
}

export default SpeedDialAction;
