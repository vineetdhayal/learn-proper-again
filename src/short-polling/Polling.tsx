import React, { useEffect, useRef, useState } from 'react'
import useVisibilityChange from './useVisibilityChange'

const Polling = () => {
    const { isPageVisible } = useVisibilityChange();
    const [isPollingEnabled, setIsPollingEnabled] = useState(false);
    const timerRef: any = useRef(null);

    useEffect(() => {
        const callbackPolling = () => {
            console.log('polling');
            if (Math.random() < 0.2) {
                stopPolling();
                setIsPollingEnabled(false);
            }
        }

        const startPolling = () => {
            timerRef.current = setInterval(callbackPolling, 1000)
        }

        const stopPolling = () => {
            clearInterval(timerRef.current);
        }

        if (isPageVisible && isPollingEnabled) {
            startPolling();
        }

        return () => stopPolling();
    }, [isPageVisible, isPollingEnabled])
    return (
        <div>

        </div>
    )
}

export default Polling
