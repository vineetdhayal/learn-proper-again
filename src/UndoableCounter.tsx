import React, { useState } from 'react'
import UndoableCounterHistory from './UndoableCounterHistory';

const UndoableCounter = () => {
    const [counter, setCounter] = useState(0);
    const [history, setHistory]: any = useState([]);
    const [undoHistory, setUndoHistory]: any = useState([]);

    const OPERATION_LABELS: Record<string, any> = {
        "/2": { type: 'divide', number: 2 },
        "-1": { type: 'decrement', number: 1 },
        "+2": { type: 'increment', number: 2 },
        "*2": { type: 'multiply', number: 2 },
    };

    const onClickOperation = (exp: any) => {
        const { type, number } = OPERATION_LABELS[exp];
        let newCounter;
        switch (type) {
            case 'increment': {
                setCounter(counter + number);
                newCounter = counter + number;
            }
            case 'decrement': {
                setCounter(counter - number);
                newCounter = counter - number;
            }
            case 'divide': {
                setCounter(counter / number);
                newCounter = counter / number;
            }
            case 'multiply': {
                setCounter(counter * number);
                newCounter = counter * number;
            }
        }
        setHistory([{ exp, counter, newCounter }, ...history]);
    }

    return (
        <div className='App'>
            <div className='row'>
                <button disabled={history.length === 0}>Undo</button>
                <button disabled={undoHistory.length === 0}>Redo</button>
                <button>Reset</button>
            </div>
            <div className='row'>
                <button onClick={() => onClickOperation("/2")}>/2</button>
                <button onClick={() => onClickOperation("-1")}>-1</button>
                <button>{counter}</button>
                <button onClick={() => onClickOperation("+1")}>+1</button>
                <button onClick={() => onClickOperation("+2")}>+2</button>
            </div>
            <UndoableCounterHistory history={history}/>
        </div>
    )
}

export default UndoableCounter
