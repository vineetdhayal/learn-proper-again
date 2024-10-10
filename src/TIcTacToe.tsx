import React, { useCallback, useEffect, useState } from 'react';
import './tic.css';

const TIcTacToe = () => {
    const [board, setBoard] = useState(new Array(9).fill(null));
    const [isNextX, setIsNextX] = useState('O');
    const [filled, setFilled] = useState(0);

    const handleClick = (index: number) => {
        let newBoard = [...board];
        if (isNextX === 'O') {
            newBoard[index] = 'O';
            setIsNextX('X');
        }
        else {
            newBoard[index] = 'X';
            setIsNextX('O');
        }

        setFilled(filled + 1);

        setBoard(newBoard);
    }

    useEffect(() => {
        if (filled === 9) {
            setTimeout(() => {
                setBoard(new Array(9).fill(null));
                console.log(board);
            }, 5000)
        }
    }, [filled])

    const calculateWinner = useCallback((board: any) => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Horizontal lines
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Vertical lines
            [0, 4, 8], [2, 4, 6]             // Diagonal lines
        ];

        console.log('asdfad', board);
        for (const [a, b, c] of winningCombinations) {
            console.log(a, b, c);
            if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                return board[a];
            }
        }

        return null;
    }, [board])

    return (
        <div className='board'>
            {board.map((b: any, index: any) => {
                return <div className='cell' key={index} onClick={() => handleClick(index)}>{b}</div>
            })}

            {calculateWinner(board)}
        </div>
    )
}

export default TIcTacToe
