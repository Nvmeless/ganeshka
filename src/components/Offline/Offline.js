import { useEffect } from "react";
import { useBooleanState, usePrevious } from "webrix/hooks"; 
import { ReactComponent as OfflineLogo } from "../../logo.svg";
import {StyledOfflineContent, StyledOfflineSvg, StyledOfflineOverlay, StyledOffline } from './styles.js';
import 'animate.css';

export default function Offline({children}){
    const {value:online, setFalse:setOffline, setTrue:setOnline} = useBooleanState(navigator.onLine);
    const previousOnline = usePrevious(online);
    
    useEffect(() => {
        window.addEventListener('online', setOnline);
        window.addEventListener('offline', setOffline);
        return () => {
            window.removeEventListener('online', setOnline);
            window.removeEventListener('offline', setOffline);
        }
    }, [])
    
    return (
        <>
        <StyledOffline
            className={[
                'offline',
                'animate__animated',
                'animate__faster',
                `animate__${online ? 'slideOutUp': "slideInDown"}`
            ].join(' ')}
            style={previousOnline=== online && online ? {display:'none'} : void 0}
            >
                <StyledOfflineContent className="offline__content">
                    <StyledOfflineSvg>
                        <OfflineLogo></OfflineLogo>
                    </StyledOfflineSvg>
                    <div className="offline__text"></div>
                </StyledOfflineContent>
                <StyledOfflineOverlay className={["offline__overlay"].join(' ')}/>
            </StyledOffline>
        </>
    )
}