import React, { useState } from 'react';
import './chess.css'

const DragDrop = () => {
    const [widgets, setWidgets]: any = useState([]);

    const startDrag = (e: any, type: any) => {
        console.log(e);
        e.dataTransfer.setData('widgetType', type);
    }

    const dropData = (e: any) => {
        const data = e.dataTransfer.getData('widgetType');
        console.log(data);
        setWidgets([...widgets, data]);
    };

    return (<>
        <div>
            <div className='drag' draggable onDragStart={(e) => startDrag(e, 'Drag First')}>Drag first</div>
            <div className='drag' draggable onDragStart={(e) => startDrag(e, 'Drag Second')}>Drag Second</div>
        </div>
        <div className='drop-container' onDragLeave={(e) => dropData(e)} >
            {widgets.map((z: any, index: any) => <div className='drag' key={index}>{z}</div>)}
        </div>
    </>
    )
}

export default DragDrop
