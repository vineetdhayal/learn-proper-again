import React from 'react'
import Board from './Board';
import './letter.css'
import Keyboard from './Keyboard';

const Wordle = () => {
    return (
        <div className='wordle'>
            <h1>Wordle</h1>
            <Board />
            <Keyboard />
        </div>
    )
}

export default Wordle
