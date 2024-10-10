import React, { useState } from 'react'
import Input from './Input';

const Auth = () => {
    const [code, setCode] = useState(new Array(6).fill(''));
    const [focusedIndex, setFocusedIndex] = useState(0);

    const handleKeyDown = (e: any) => {
        const key = e.key;
        switch (key) {
            case 'ArrowLeft': {
                setFocusedIndex(focusedIndex - 1);
                break;
            }
            case 'ArrowRight': {
                setFocusedIndex(focusedIndex + 1);
                break;
            }
        }
    }

    return (
        <div>
            {code.map((cd, idx) => {
                return <Input key={idx} value={cd} onKeyDown={handleKeyDown} focused={focusedIndex === idx}></Input>
            })}
        </div>
    )
}

export default Auth
