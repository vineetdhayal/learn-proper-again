import React, { useEffect, useRef, useState } from 'react';
import './selectable.css'

function isOverlapping(rectA, rectB) {
    return (
        rectA.left < rectB.right &&
        rectA.right > rectB.left &&
        rectA.bottom > rectB.top &&
        rectA.top < rectB.bottom
    );
}

function drawBox(selection: any, drag: any, selectRef: any) {
    const left = Math.min(selection.x, drag.x);
    const top = Math.min(selection.y, drag.y);
    const height = Math.abs(selection.y - drag.y);
    const width = Math.abs(selection.x - drag.x);
    selectRef.current.left = left;
    selectRef.current.top = top;
    selectRef.current.style.width = `${width}px`;
    selectRef.current.style.height = `${height}px`;
}

function selectedCellss(selectRef, dragRef) {
    const cells = dragRef.querySelectorAll('.grid-cell');
    const selected = new Set();
    for (let i = 0; i < cells.length; i++) {
        const rect1 = cells[i].getBoundingClientRect();
        const rect2 = selectRef.getBoundingClientRect();
        console.log(rect1, rect2);
        if (isOverlapping(rect1, rect2)) {
            selected.add(i);
        }
    }
    return selected;
}

const SelectableGrid = () => {
    const [selectedCells, setSelectedCells] = useState(new Set());
    const [dragOrigin, setDragOrigin]: any = useState(null);
    const dragRef: any = useRef();
    const selectRef: any = useRef();

    useEffect(() => {
        function startMouse(e: any) {
            setSelectedCells(new Set());
            console.log(e);
            setDragOrigin({ x: e.pageX, y: e.pageY });
        }
        window.addEventListener('mousedown', startMouse);
        return () => window.removeEventListener('mousedown', startMouse);
    }, []);

    useEffect(() => {
        if (!dragOrigin) {
            return;
        }
        function handleMove(event: any) {
            drawBox({ x: event.pageX, y: event.pageY }, dragOrigin, selectRef);
        }
        // const newSelectedCells = selectedCellss(selectRef.current, dragRef.current);
        // setSelectedCells(newSelectedCells);
        window.addEventListener('mouseMove', handleMove);
    }, [dragOrigin]);

    return (
        <div ref={dragRef}>
            <div ref={selectRef}>
                <div className='grid'>
                    {Array.from({ length: 100 }, () => 0).map((x, index) => {
                        return <div key={index} className={['grid-cell', selectedCells.has(index) && 'selected-cell'].filter(Boolean).join(' ')}></div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default SelectableGrid
