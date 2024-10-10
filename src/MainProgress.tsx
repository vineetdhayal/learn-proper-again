import React, { useState } from 'react'
import Progress from './Progress'

const MainProgress = () => {
    const [count, setCount] = useState(0);
    const [fill, setFill] = useState(0);
    return (
        <>
            <div>
                {new Array(count).fill(0).map((k, index) => <Progress key={index} fill={fill} index={index} setFill={setFill} />)}
            </div>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </>
    )
}

export default MainProgress
