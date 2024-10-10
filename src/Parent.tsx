import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [selected, setSelected] = useState('');
    const total = ['first', 'second', 'third'];
    return (
        <div>
            <input type='radio' checked={'first' === selected} onChange={() => setSelected('first')}></input>
            <input type='radio' checked={'second' === selected} onChange={() => setSelected('second')}></input>
            <input type='radio' checked={'third' === selected} onChange={() => setSelected('third')}></input>
            <Child parent={selected} onClick={() => setSelected('second')}></Child>
        </div>
    )
}

export default Parent
