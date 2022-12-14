import * as React from 'react';
import './style.css';
// import { FormControlLabel} from "@material-ui/core";

export const Switch = ({disabled, defaultChecked, labelBefore, labelAfter, iconUnchecked, iconChecked, size, color, placement, checked, onChange,  ...props}) =>  {
  /*
    disabled => empêche le changement d'état du bouton switch
    defaultChecked => force l'état check du switch au chargement de la page   [ etat externe => defaultChecked desactivé : voir app.js ligne 10 ]
    labelBefore='message' => affiche un text avant le bouton switch
    labelAfter='message' => affiche un text après le bouton switch
    iconUnchecked='{icon}' => affiche un icone dans le bouton Switch dans l'état unchecked
    iconChecked='{icon}' => affiche un icone dans le bouton Switch dans l'état checked
    size='small' => Si size renvoie small la taille u bouton diminue
    color='#FFFFFF' => permet de choisir la couleur du bouton en état Checked

  */

    var [toggle, setToggle] = React.useState(!!defaultChecked);
    if(checked != undefined){ toggle=checked }
    
    const triggerToggle = () => {
      if(disabled) return
      setToggle( !toggle )
      if(onChange) onChange( !toggle )
    }

    // renvoie du HTML
    return (
      <>
        <div className='Switch'>
        <div className='label'>{labelBefore}</div>
          <div onClick={triggerToggle} className={`wrg-toggle ${toggle ? 'wrg-toggle--checked' : 'wrg-toggle--unchecked'} ${disabled? 'disable' : '' } ${size == 'small'? 'sizeSmall' : '' }`} >
            <div className="wrg-toggle-container" style={{ backgroundColor: toggle? color : ''} } >
              <div className="wrg-toggle-uncheck">
                <span>{iconUnchecked}</span>
              </div>
              <div className="wrg-toggle-check">
                <span>{iconChecked}</span>
              </div>
            </div>
            <div className="wrg-toggle-circle"></div>
            <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
          </div>
          <div className='label'>{labelAfter}</div>
        </div>   
      </>
    )
}

Switch.defaultProps = {
  backgroundColor: null,
  rounded:false,
  shadow: 1
}