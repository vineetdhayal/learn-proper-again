import React, { useState } from 'react';
import './tooltip.css'

const Tooltip = (props: any) => {
    let timeout;
    const [active, setActive] = useState(false);

    const handleEnter = () => {
        setActive(true);
    }

    const handleLeave = () => {
        setActive(false);
    }

    return (
        <div className='tooltip-wrapper' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            {props.children}
            {active && (<div className={`tooltip-tip ${props.direction ? props.direction : 'top'}`}>
                {props.content}
            </div>)}
        </div>
    )
}

export default Tooltip
