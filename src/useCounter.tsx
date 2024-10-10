import React, { Dispatch, SetStateAction, useRef, useState } from 'react';

const useCounter = () => {
    const [counter, setCounter]: [number, Dispatch<SetStateAction<number>>] = useState(0);
    const [running, setRunning]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
    const id: any = useRef(null);

    const startTimer = () => {
        setRunning(!running);
        if (!running) {
            id.current = setInterval(() => {
                setCounter((counter) => counter + 1);
            }, 1000);
        }
        else {
            clearInterval(id.current);
        }
    }

    const resetTimer = () => {
        setCounter(0);
        setRunning(false);
        clearInterval(id.current);
    }
    return {startTimer, resetTimer, counter, running}
}

export default useCounter
