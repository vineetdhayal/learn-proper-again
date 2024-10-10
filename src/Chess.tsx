import React from 'react';
import './chess.css';

const Chess = () => {
    const first = Array(8).fill(0);
    const blackColor = (a: any, b: any) => {
        return ((a + b) % 2 === 0);
    }
    return (
        <div className='grid'>
            {first.map((_, a) => {
                return (first.map((_, b) => <span key={a + b} className={blackColor(a, b) ? 'black' : ''}></span>))
            })}
        </div>
    )
}

export default Chess
