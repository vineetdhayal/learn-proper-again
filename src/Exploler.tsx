import React, { useState } from 'react';
import './grid.css';
import useExploler from './useExploler';

const Exploler = ({ data, handleNodeTree }: any) => {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    }
    )

    const handleNewFolder = (e: any, folder: any) => {
        e.stopPropagation();
        setExpand(true);
        setShowInput({
            visible: true,
            isFolder: folder
        })
    };

    const addFolder = (e: any) => {
        console.log(e);
        if (e.keyCode === 13) {
            console.log('id', data.id, e.target.value);
            handleNodeTree(data.id, e.target.value);
            setShowInput({ ...showInput, visible: false })
        }
    }

    console.log(data);

    if (data.isFolder) {
        return (
            <>
                <div className='name' onClick={() => setExpand(!expand)}>
                    <div className='folder'>
                        <div>📁{data.name}</div>
                        <button onClick={(e) => handleNewFolder(e, true)}>Folder+</button>
                        <button onClick={(e) => handleNewFolder(e, false)}>File+</button>
                    </div>
                </div>
                {
                    <div style={{ display: expand ? 'block' : 'none' }}>
                        {showInput.visible && <input type='text' autoFocus onBlur={() => setShowInput({ ...showInput, visible: false })} onKeyDown={(e) => { addFolder(e) }}></input>}
                        {data.data.map((z: any, index: number) => <Exploler data={z} key={index} handleNodeTree={handleNodeTree} />)}
                    </div>
                }
            </>)
    }
    else {
        return <div className='file'>🗃️{data.name}</div>
    }
}

export default Exploler
