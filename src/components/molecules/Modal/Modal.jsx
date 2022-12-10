import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Modal = ({...props}) => {

    const background = !props.hideBackdrop && ('rgba(0,0,0,0.7)' || 'rgba(255,255,255)') 

    var MODAL_STYLES = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '50px',
        backgroundColor: '#FFF',
        zIndex: 1000
    }
    
    var OVERLAY_STYLES = {
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

    if(!document.getElementById('portal') && !props.disablePortal){
        portal = document.createElement('div')
        portal.setAttribute('id', 'portal')
        document.body.appendChild(portal)
    }



    useEffect(() => {  
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

        if(!props.open && props.keepMounted){
            document.getElementById('overlay').style.visibility = "hidden";
        }

        if(props.open && props.keepMounted){
            document.getElementById('overlay').style.visibility = "visible";
        }
        if(props.open && !props.disableAutoFocus){
            inputReference.current.focus();
        }
        
        if(props.open && !props.disableScrollLock){
            document.body.style.overflow = 'hidden';
        }
        else if(!props.open && !props.disableScrollLock){
            document.body.style.overflow = '';
        }

        if(props.open && !props.disableEnforceFocus){
            const focusableModalElements = inputReference.current.querySelectorAll(
                'a[href], button:not([disabled]), textarea, input, select'
              );

              if(focusableModalElements.length != 0){
                const firstElement = focusableModalElements[0]
                const lastElement =
                focusableModalElements[focusableModalElements.length - 1]

                firstElement.focus();

                document.addEventListener('keydown', function handleFocus(e) {
                    if(e.key === 'Tab'){
                        // if going forward by pressing tab and lastElement is active shift focus to first focusable element 
                        if (!e.shiftKey && document.activeElement === lastElement) {
                            firstElement.focus()
                            return e.preventDefault()
                        }
                    
                        // if going backward by pressing tab and firstElement is active shift focus to last focusable element 
                        if (e.shiftKey && document.activeElement === firstElement) {
                            lastElement.focus()
                            e.preventDefault()
                        }
                }
                
                    
            })
              }

           
        }
        
        

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
        if(!props.disableAutoFocus){
            if(!props.disableRestoreFocus){
                lastElementFocus.focus();
            }
        }
        if(props.keepMounted){
            document.getElementById('overlay').style.visibility = "hidden"
        }
        props.onClose();
        
    }

    if(props.open){
        if(!props.disablePortal){
            return ReactDOM.createPortal(
                <div id="overlay" className="overlay" onClick={handleClose} style={OVERLAY_STYLES}>
                    <div id="modal" className={['modal', props?.className].join(' ')} onClick={(e) => {
                        e.stopPropagation();
                    }} style={MODAL_STYLES} tabIndex="-1" ref={inputReference}>
                            {props.children}
                    </div>
                </div>
            , document.getElementById('portal'))
        }
        return (
            <div id="overlay" className="overlay" onClick={handleClose} style={OVERLAY_STYLES}>
                <div id="modal" className={['modal', props?.className].join(' ')} onClick={(e) => {
                    e.stopPropagation();
                }} style={MODAL_STYLES} tabIndex="-1" ref={inputReference}>
                        {props.children}
                </div>
            </div>
        )
    }
    else {
        if(props.keepMounted){
            if(!props.disablePortal){
                return ReactDOM.createPortal(
                    <div id="overlay" className="overlay" onClick={handleClose} style={OVERLAY_STYLES}>
                        <div id="modal" className={['modal', props?.className].join(' ')} onClick={(e) => {
                            e.stopPropagation();
                        }} style={MODAL_STYLES} tabIndex="-1" ref={inputReference}>
                                {props.children}
                        </div>
                    </div>
                , document.getElementById('portal'))
            }
            return (
                <div id="overlay" className="overlay" onClick={handleClose} style={OVERLAY_STYLES}>
                    <div id="modal" className={['modal', props?.className].join(' ')} onClick={(e) => {
                        e.stopPropagation();
                    }} style={MODAL_STYLES} tabIndex="-1" ref={inputReference}>
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
     * The function to close the modal
     */
    onClose: PropTypes.func,

}


Modal.defaultProps = {
    open: false,
    disableEscapeKeyDown: false,
    disablePortal: false,
    disableAutoFocus: false,
    disableEnforceFocus: false,
    disableRestoreFocus: false,
    disableScrollLock: false,
    hideBackdrop: false,
    keepMounted: false,
    onClose: null,
}