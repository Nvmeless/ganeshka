import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop } from '@mui/material';
import { useState } from 'react';

export const Modal = ({...props}) => {

    const background = !props.hideBackdrop && ('rgba(0,0,0,0.7)' || 'rgba(255,255,255)') 

    var MODAL_STYLES = {
        border: 'solid',
        position: 'fixed',
        textAlign: 'center',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '50px',
        backgroundColor: '#FFF',
        zIndex: 1000
    }
    
    var BACKDROP_STYLES = {
        backgroundColor: background,
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        textAlign: 'center',
        zIndex: 1000
    }
    
    var lastElementFocus = document.activeElement

    const inputReference = useRef(null);

    var portal;

    // Props pour la création du portail si le props disablePortal est à false
    if(!document.getElementById('portal') && !props.disablePortal){
        portal = document.createElement('div')
        portal.setAttribute('id', 'portal')
        document.body.appendChild(portal)
    }

    var backdrop;
    
    // Gestion du backdrop : s'il n'y a pas de props slots, un backdrop par défaut est renvoyé, sinon récupération du composant envoyé dans slots.backdrop
    // Permet également l'ajout de props au composant backdrop grâce au props slotsProps.backdrop s'il ne s'agit pas du backdrop par défaut
    if(!props.slots?.backdrop){
        backdrop = <div id="backdrop" className="backdrop"  style={BACKDROP_STYLES}></div>;
    }
    else{
        var objectBackdropProps= new Object();
        if(props.slotsProps){
            objectBackdropProps = props.slotsProps.backdrop
            
        }
        if(props.hideBackdrop){
            objectBackdropProps.invisible = true;
        }
        objectBackdropProps.open = true
        backdrop = React.createElement(props.slots.backdrop.Backdrop, objectBackdropProps)
    }


    useEffect(() => {  

        // Gestion du container qui sera le root du portail (fonctionne uniquement si le portail est activé)
        if(!props.disablePortal && props.container){
            if(props.container){
                if(typeof(props.container) == "function"){
                    var containerPortal = props.container();
                }
                else{
                    var containerPortal = props.container
                }
                var containerElement = document.getElementById(containerPortal.props.id)
                containerElement.appendChild(document.getElementById('portal'))
            }
        }

        // Gestion du props keepMounted : si ce props est à true, le modal est monté de base et sera seulement caché plutôt que démonté
        if(!props.open && props.keepMounted){
            document.getElementById('root-modal').style.visibility = "hidden";
        }
        if(props.open && props.keepMounted){
            document.getElementById('root-modal').style.visibility = "visible";
        }

        // Gestion du props disableAutoFocus : Si à false, focus sur le modal en lui-même
        if(props.open && !props.disableAutoFocus){
            inputReference.current.focus();
        }
        
        // Gestion du props disableScrollLock : Si à false, empêche de scroller si le modal est ouvert
        if(props.open && !props.disableScrollLock){
            document.body.style.overflow = 'hidden';
        }
        else if(!props.open && !props.disableScrollLock){
            document.body.style.overflow = '';
        }

        // Gestion du props disableEnforceFocus : Si à false, le focus est possible uniquement sur les éléments focusable du modal
        // (PS: si aucun élément du modal n'est focusable, ne fonctionne pas)
        if(props.open && !props.disableEnforceFocus){
            const focusableModalElements = inputReference.current.querySelectorAll(
                'a[href], button:not([disabled]), textarea, input, select'
              );

              if(focusableModalElements.length != 0){
                const firstElement = focusableModalElements[0]
                const lastElement = focusableModalElements[focusableModalElements.length - 1]

                firstElement.focus();

                document.addEventListener('keydown', function handleFocus(e) {
                    if(e.key === 'Tab'){
                        if (!e.shiftKey && document.activeElement === lastElement) {
                            firstElement.focus()
                            return e.preventDefault()
                        }
                    
                        if (e.shiftKey && document.activeElement === firstElement) {
                            lastElement.focus()
                            e.preventDefault()
                        }
                    }
                })
            }

           
        }
        //Gestion du props disableEscapeKeyDown : Si à false, permet au modal de se fermer lorsque l'utilisateur appuie sur la touche 'Échap'
        if (props.open && !props.disableEscapeKeyDown){
            
            function handleEscape(e) {
                if(e.keyCode === 27)
                    handleClose();
            }
    
            document.addEventListener('keydown', handleEscape);
    
            return function cleanup() {
            document.removeEventListener('keydown', handleEscape);
            }
        }
    }, [props.open]);

    
    const handleClose = () => {
        // Gestion du focus : Si les props disableAutoFocus et disableRestoreFocus sont à false, le focus est placé sur l'élément focus avant l'ouverture du modal
        if(!props.disableAutoFocus){
            if(!props.disableRestoreFocus){
                lastElementFocus.focus();
            }
        }
        if(props.keepMounted){
            document.getElementById('root-modal').style.visibility = "hidden"
        }
        props.onClose();
        
    }

    if(props.open){
        if(!props.disablePortal){
            return ReactDOM.createPortal(
                <div id="root-modal" onClick={handleClose}>
                    {backdrop}
                        <div id="modal" className={['modal', props?.classes].join(' ')} onClick={(e) => {e.stopPropagation();}} style={MODAL_STYLES} tabIndex="-1" ref={inputReference}>
                                {props.children}
                        </div>
                    </div>
            , document.getElementById('portal'))
        }
        return (
            <div id="root-modal" onClick={handleClose}>
                {backdrop}
                <div id="modal" className={['modal', props?.classes].join(' ')} onClick={(e) => {e.stopPropagation();}} style={MODAL_STYLES} tabIndex="-1" ref={inputReference}>
                        {props.children}
                </div>
            </div>
        )
    }
    else {
        if(props.keepMounted){
            if(!props.disablePortal){
                return ReactDOM.createPortal(
                    <div id="root-modal" onClick={handleClose}>
                        {backdrop}
                        <div id="modal" className={['modal', props?.classes].join(' ')} onClick={(e) => {e.stopPropagation();}} style={MODAL_STYLES} tabIndex="-1" ref={inputReference}>
                                {props.children}
                        </div>
                    </div>
                , document.getElementById('portal'))
            }
            return (
                <div id="root-modal" onClick={handleClose}>
                    {backdrop}
                    <div id="modal" className={['modal', props?.classes].join(' ')} onClick={(e) => {e.stopPropagation();}} style={MODAL_STYLES} tabIndex="-1" ref={inputReference}>
                        {props.children}
                    </div>
                </div>
            )
        }
    }
}


Modal.propTypes ={
    /**
     * The modal is open ?
     */
    open: PropTypes.bool,
    /**
     * The modal is rendered in a portal ?
     */
    disablePortal: PropTypes.bool,
    /**
     * The modal will close when pressing escape key ?
     */
    disableEscapeKeyDown: PropTypes.bool,

    /**
     * The focus will be set on the modal.
     */
    disableAutoFocus: PropTypes.bool,

    /**
     * The focusable element can only be in the modal ?
     */
    disableEnforceFocus: PropTypes.bool,

    /**
     * Is the focus restored after the modal is closed ? 
     */
    disableRestoreFocus: PropTypes.bool,

    /**
     * Is the scroll locked when the modal is open ?
     */
    disableScrollLock: PropTypes.bool,

    /**
     * Is the backdrop of the modal hidden ?
     */
    hideBackdrop: PropTypes.bool,

    /**
     * Is the modal mounted at anytime ?
     */
    keepMounted: PropTypes.bool,

    /**
     * Additionnal classes for the modal
     */
    classes: PropTypes.string

}


Modal.defaultProps = {
    disableEscapeKeyDown: false,
    disablePortal: false,
    disableAutoFocus: false,
    disableEnforceFocus: false,
    disableRestoreFocus: false,
    disableScrollLock: false,
    hideBackdrop: false,
    keepMounted: false,
}