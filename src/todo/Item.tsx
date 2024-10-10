import React, { useState } from 'react';
import './styles.css';

const Item = ({ text, completed, id, updateCompleted, updateText}: any) => {
    const [edit, setEdit] = useState(false);
    const [editText, setEditText] = useState('');
    return (
        <div className='item'>
            <div className='circle' onClick={() => updateCompleted(id)}>{completed ? <span>&#10003</span> : ''}</div>
            <div onDoubleClick={() => {
                if (!completed) {
                    setEdit(true);
                }
            }} className={completed ? 'text' : ''}>
                {edit ? <input onChange={(e) => {
                    setEditText(e.target.value)
                }}
                    onBlur={() => {
                        setEdit(false);
                        updateText(id, editText);
                    }}
                ></input> : text}
            </div>
            <div className='close'>❌</div>
        </div>
    )
}

export default Item
