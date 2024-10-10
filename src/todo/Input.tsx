import React, { useRef, useState } from 'react'
import Item from './Item';

const Input = () => {
    const inputRef: any = useRef(null);
    const [data, setData]: any = useState([]);
    const handleChange = (e) => {
        console.log(e);
        if (e.key === 'Enter') {
            setData([...data, { id: Date.now(), completed: false, text: e.target.value }])
            console.log(data);
            inputRef.current.value = null;
        }
    }

    const updateText = (id: any, text: any) => {
        const updatedData = data.map((x) => {
            if (x.id === id) {
                x.text = text;
            }
            return x;
        })
        setData(updatedData);
    }

    return (
        <div>
            <input type='text' ref={inputRef} onKeyPress={(e) => handleChange(e)}></input>
            {data.map((x, index) => {
                return <Item {...x} updateText={updateText}></Item>
            })}
        </div>
    )
}

export default Input
