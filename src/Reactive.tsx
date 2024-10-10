import React, { useEffect, useState } from 'react'

const Reactive = () => {
    const [dimensions, setDimensions] = useState({
        height: 0,
        width: 0
    });

    useEffect(() => {
        const handleResize = () => {
            console.log('called');
            setDimensions({ height: window.innerHeight, width: window.innerWidth })
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return (
        <div>

        </div>
    )
}

export default Reactive
