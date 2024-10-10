import React, { useEffect, useState } from 'react';
import './Progress.css'

const ProgressBar = () => {
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (start) {
            return;
        }
        console.log('heee');
        setStart(true);
    })

    return <div className='bar'>
        <div className={['bar-content', start && 'bar-content-filled'].filter(Boolean).join(' ')}></div>
    </div>
}

export default function ProgressDiff() {
    const [bars, setBars] = useState(0);

    return (
        <div className="wrapper">
            <div>
                <button
                    onClick={() => {
                        setBars(bars + 1);
                    }}>
                    Add
                </button>
            </div>
            <div className="bars">
                {Array(bars)
                    .fill(null)
                    .map((_, index) => (
                        <ProgressBar key={index} />
                    ))}
            </div>
        </div>
    );
}
