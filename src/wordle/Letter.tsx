import React, { useContext } from 'react';
import { context } from './ContextProvider';
import './letter.css';

const Letter = ({ letterPos, attemptval }: any) => {
    const { board, setBoard }: any = useContext(context);
    const value = board[attemptval][letterPos];
    return (
        <div className='letter'>
            {value}
        </div>
    )
}

export default Letter
