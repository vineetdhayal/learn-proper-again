import React, { useCallback, useEffect } from 'react';
import './letter.css';
import Key from './Key';

const Keyboard = () => {
    const first = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const second = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const third = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

    const handleKeyboard = useCallback(() => {}, [])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyboard);

        return () => document.removeEventListener('keydown', handleKeyboard);
    }, [handleKeyboard])

    return (
        <div className='keyboard' onKeyDown={handleKeyboard}>
            <div className='line1'>
                {first.map((z, index) => <Key key={z} keyy={z}></Key>)}
            </div>
            <div className='line2'>
                {second.map((z, index) => <Key key={z} keyy={z}></Key>)}
            </div>
            <div className='line1'>
                <Key keyy={'Enter'}></Key>
                {third.map((z, index) => <Key key={z} keyy={z}></Key>)}
                <Key keyy={'Del'}></Key>

            </div>
        </div>
    )
}

export default Keyboard
