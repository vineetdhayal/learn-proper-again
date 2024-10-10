import React, { useState } from 'react'

const Child = (props: any) => {
    const parent = props.parent;
    const [selected, setSelected] = useState('');
    const [data, setData] = useState('');
    const [list, setList]: any = useState([]);

    return (
        <div>
            <button onClick={() => {
                setList([...list, `${parent}+${data}+${selected}`])
                setData('');
                props.onClick()
            }}>Add</button>

            <input type='radio' checked={'one' === selected} onChange={() => setSelected('one')}></input>
            <input type='radio' checked={'two' === selected} onChange={() => setSelected('two')}></input>
            <input type='radio' checked={'three' === selected} onChange={() => setSelected('three')}></input>
            <input type='text' value={data} onChange={(e) => setData(e.target.value)}></input>

            {list.map((x, index) => {
                return <h1 key={index}>{x}</h1>
            })}
        </div>
    )
}

export default Child
