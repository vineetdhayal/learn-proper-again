import React, { useEffect, useRef, useState } from 'react'

const ToDo = () => {
    const [tasks, setTasks]: any = useState([]);
    const [edit, setEdit] = useState(null);
    const [taskText, setTaskText] = useState('');
    const [editText, setEditText] = useState('');
    const inputRef = useRef(null);

    // useEffect(() => {
    //     document.addEventListener('click', handleMouseOver);
    //     return () => document.removeEventListener('click', handleMouseOver);
    // }, [])

    const handleClick = () => {
        setTasks([...tasks, taskText]);
        setTaskText('');
    }

    const handleMouseOver = () => {
        console.log('i am called');
        const newTasks = tasks.slice(tasks, edit, editText);
        setTasks(newTasks);
        setEdit(null);
        setEditText('');
    }

    return (
        <div>
            {tasks.map((task: any, index: any) => {
                return (edit === index ? <input onChange={(e) => setEditText(e.target.value)} onBlur={() => handleMouseOver}></input> : <h3 onClick={() => setEdit(index)}>{task}</h3>)
            })}
            <input type='text' value={taskText} onChange={(e) => setTaskText(e.target.value)}></input>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default ToDo
