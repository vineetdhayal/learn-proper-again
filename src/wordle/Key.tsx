import React, { useContext } from 'react';
import './letter.css'
import { context } from './ContextProvider';

const Key = ({ keyy }: any) => {
    const { board, setBoard, currAttmpt, setCurrAtmpt }: any = useContext(context);

    const selectLetter = (e: any) => {
        const { attemptval, letterPos }: any = currAttmpt;

        if (keyy === 'enter') {
            if (letterPos !== 5) {
                return;
            }
            setCurrAtmpt({ letterPos: 0, attemptval: attemptval + 1 })
        }

        if (keyy === 'del') {
            setCurrAtmpt({ letterPos: letterPos - 1, attemptval })
        }

        const newBoard = [...board];
        console.log(attemptval, letterPos);

        newBoard[currAttmpt.attemptval][currAttmpt.letterPos] = keyy;
        setBoard(newBoard);
        console.log(newBoard);
        setCurrAtmpt({ letterPos: letterPos + 1, attemptval })
    }
    return (
        <div className='btn' onClick={(e) => selectLetter(e)}>
            {keyy}
        </div>
    )
}

export default Key
