import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';





export const Modal = ({...props}) => {

    const background = props.hideBackdrop && 'rgba(255,255,255)' || 'rgba(0,0,0,0.7)' 

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
        zIndex: 1000
    }
    
    var CONTENT_STYLES = {
        textAlign: 'center',
        zIndex: 1000
    }

    const inputReference = useRef(null);

    useEffect(() => {  
        

        if(props.open && !props.disableAutoFocus){
            inputReference.current.focus();
        }
        if(!document.getElementById('portal') && !props.disablePortal){
            let portal = document.createElement('div')
            portal.setAttribute('id', 'portal')
            document.body.appendChild(portal)
        }

        if (props.open && !props.disableEscapeKeyDown){
            function handleEscape(e) {
                if(e.keyCode === 27)
                    props.onClose();
            }
    
            document.addEventListener('keydown', handleEscape);
    
            return function cleanup() {
            document.removeEventListener('keydown', handleEscape);
            }
        
        }
    }, [props.open]);

    if(props.open){
        if(!props.disablePortal){
            return ReactDOM.createPortal(
                <div className="overlay" onClick={props.onClose} style={OVERLAY_STYLES} autoFocus>
                    <div className={['modal']} onClick={(e) => {
                        e.stopPropagation();
                    }} style={MODAL_STYLES} tabIndex="-1" ref={inputReference}>
                        <div className="content" style={CONTENT_STYLES} >
                            {props.children}
                        </div>
                    </div>
                </div>
            , document.getElementById('portal'))
        }
        return (
            <div className="overlay" onClick={props.onClose} style={OVERLAY_STYLES}>
                <div className={['modal']} onClick={(e) => {
                    e.stopPropagation();
                }} style={MODAL_STYLES}>
                    <div className="content" style={CONTENT_STYLES}>
                        {props.children}
                        
                    </div>
                </div>
            </div>
        )
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
    disableEscapeDown: PropTypes.bool
}


Modal.defaultProps = {
    open: false,
    disableEscapeDown: false,
    disablePortal: false
}