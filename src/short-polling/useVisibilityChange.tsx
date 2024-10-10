import React, { useEffect, useState } from 'react'

const useVisibilityChange = () => {
    const [isPageVisible, setIsPageVisible] = useState(!document.hidden);

    useEffect(() => {
        const handleVisibility = () => {
            setIsPageVisible(!document.hidden);
        }
        document.addEventListener('visibilitychange', handleVisibility);
        return () => document.removeEventListener('visibilitychange', handleVisibility);
    }, [])

    return { isPageVisible };
}

export default useVisibilityChange
