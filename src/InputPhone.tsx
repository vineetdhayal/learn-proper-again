import React, { useRef, useState } from 'react'

const InputPhone = () => {
    const [input, setInput]: any = useState();
    const inputRef: any = useRef(null);
    const handleInput = (e: any) => {
        setInput(e.target.value);
        console.log(e.target.selectionStart, e.target.selectionEnd);
        const length = input.length;
        if (inputRef.current) {
            inputRef.current.setSelectionRange(length - 1, length - 1);
        }
    }

    return (
        <div>
            <input type='tel' ref={inputRef} value={input} onChange={(e: any) => handleInput(e)}></input>
        </div>
    )
}

export default InputPhone
