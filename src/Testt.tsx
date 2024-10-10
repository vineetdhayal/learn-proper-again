import React, { useEffect, useState } from 'react'

const Testt = (props: any) => {
    const [value, setValue] = useState(1);
    const addValue = () => {
        setValue(value + 1)
    }
    useEffect(() => { setValue(1) })
    return (
        <div>
            <button onClick={() => addValue()}></button>
            {value}
        </div>
    )
}

export default Testt
