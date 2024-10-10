import React, { useCallback, useEffect, useState } from 'react';
import './tictac.css';

const n = 5;
const m = 5;

const TicTac = () => {
    const [board, setBoard] = useState(new Array(n * m).fill(null));
    const [player, setPlayer] = useState('X');
    const [winner, setWinner] = useState(null);

    const onReset = useCallback(() => {
        setBoard(new Array(n * m).fill(null));
        setPlayer('O');
    }, [n])

    useEffect(() => {
        onReset();
    }, [onReset]);

    const determineWinner = (board, index, n, m) => {
        const row = Math.floor(index / n);
        const col = index % m;
        const rowLine = [];
        for (let i = 0; i < n; i++) {
            rowLine.push(row * n + i);
        }
        const colLine = [];
        for (let j = 0; j < m; j++) {
            colLine.push(col * m + j);
        }
        console.log(colLine);
        const leftDiagonal: any = [];
        let stepsToStart = Math.min(col, row);
        let sr = row - stepsToStart;
        let sc = col - stepsToStart;
        for (let i = 0; i < n; i++) {
            const cr = sr + i;
            const cc = sc + i;
            leftDiagonal.push(cr * n + cc);
        }
        console.log(leftDiagonal);
        const rightDiagonal: any = [];
        stepsToStart = Math.min(n - col + 1, row);
        sr = row - stepsToStart;
        sc = col + stepsToStart;
        for (let j = 0; j < n; j++) {
            const cr = sr + j;
            const cc = sc - j;
            rightDiagonal.push(cr * n + cc);
        }

        const lines = [rowLine, colLine, leftDiagonal, rightDiagonal];
        for (const line of lines) {
            let cw = null;
            let ccr = 0;
            for (const i of line) {
                if (board[i] === cw) {
                    ccr++;
                }
                if (ccr >= n) {
                    console.log('wins');
                }
            }
        }

        return null;
    }

    const handleClick = (index: any) => {
        const newBoard = board.slice();
        newBoard[index] = player;
        setBoard(newBoard);
        player === 'X' ? setPlayer('O') : setPlayer('X');
        setWinner(determineWinner(newBoard, index, n, m));
    }

    return (
        <div className='grid'>
            {board.map((x, index) => {
                return <div key={index} className='cell' onClick={() => handleClick(index)}>{x}</div>
            })}
        </div>
    )
}

export default TicTac
