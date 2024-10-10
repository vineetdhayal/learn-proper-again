import { Dispatch, SetStateAction, useRef, useState } from 'react'
import useCounter from './useCounter'

const Counter = () => {
    const { counter, startTimer, resetTimer, running } = useCounter();
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={startTimer}>{running ? 'Pause' : 'Start'}</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}

export default Counter
