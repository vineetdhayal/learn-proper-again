import React, { useState } from 'react';
import './circles.css';

const Circles = () => {
    const [points, setPoints]: any = useState([]);
    const [undo, setundo]: any = useState([]);

    const handleClick = (e: any) => {
        setPoints([...points, { x: e.clientX, y: e.clientY, color: colors[Math.floor(Math.random() * 6)] }]);
    }

    const handleUndoClick = () => {
        if (points.length) {
            let pointsCopy = [...points];
            let newPoint = pointsCopy.pop();
            setPoints(pointsCopy);
            setundo([...undo, newPoint]);
        }
    }

    const handleRedoClick = () => {
        if (undo.length) {
            let undoCopy = [...undo];
            let newPoint = undoCopy.pop();
            setPoints([...points, newPoint]);
            setundo(undoCopy);
        }
    }

    const colors = ['green', 'red', 'yellow', 'blue', 'pink', 'purple'];

    return (
        <>
            <button onClick={handleUndoClick}>Undo</button>
            <button onClick={handleRedoClick}>Redo</button>
            <button>Reset</button>
            <div className='circles' onClick={(e) => handleClick(e)}>
                {points.map((pt: any) => <div className='circle' style={{ left: `${pt.x}px`, top: `${pt.y}px`, backgroundColor: pt.color }}></div>)}
            </div>
        </>
    )
}

export default Circles
