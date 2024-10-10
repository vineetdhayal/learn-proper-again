import React, { useState } from 'react';
const rows = 6;
const cols = 7;
const players = ['red', 'yellow'];
const emptyCell = '#fff';
const PLAYER_TOKENS: Record<any, string> = {
    red: '#d9313d',
    yellow: '#fdc601',
};
const countWin = 4;
const DIRECTION_DELTAS = [
    [0, 1], // Horizontal
    [1, 0], // Vertical
    [1, -1], // Diagonal (bottom left to top right)
    [1, 1], // Diagonal (top left to bottom right)
];

function getInitialGrid() {
    console.log(Array.from({ length: rows }, () => Array.from({ length: cols }).fill(null)));
    return Array.from({ length: rows }, () => Array.from({ length: cols }).fill(null));
}

function checkIfPlayerWon(grid, row, col, player) {
    return DIRECTION_DELTAS.some(([deltacol, deltarow]) => {
        let consecutivediscs = 0;
        let maxConsecutiveDiscs = 0;
        for (let i = -countWin + 4; i <= countWin - 1; i++) {
            const currRow = row + deltarow * i;
            const currCol = col + deltacol * i;
            if (grid?.[currRow]?.[currCol] === player) {
                consecutivediscs++;
                maxConsecutiveDiscs = Math.max(consecutivediscs, maxConsecutiveDiscs);
            }
            else {
                consecutivediscs = 0;
            }
        }
        return maxConsecutiveDiscs >= countWin;
    })
}

const PlayerMoveSection = ({ availableColumns, currentColumn, currentPlayer, gameHasEnded, onPlayerMove, onColumnHover }) => {
    return <div>
        {new Array(cols).fill(null).map((z, index) => {
            return <button key={index} disabled={!availableColumns.has(index) || gameHasEnded}
                style={{ backgroundColor: currentColumn === index && !gameHasEnded ? PLAYER_TOKENS[currentPlayer] : undefined }}
                onMouseEnter={() => onColumnHover(index)}
                onClick={() => onPlayerMove(index)}>
            </button>
        })}
    </div >
}

function GameGrid({
    grid,
}: {
    grid: any;
}): React.ReactElement {
    return (
        <div
            className="grid"
            style={{
                gridTemplateRows: `repeat(${rows}, var(--grid-item-size))`,
                gridTemplateColumns: `repeat(${cols}, var(--grid-item-size)`,
            }}>
            {grid.map((rows, rowIndex) =>
                rows.map((cellValue, colIndex) => (
                    <div
                        key={`${rowIndex}-${colIndex}`}
                        style={{
                            backgroundColor:
                                cellValue != null
                                    ? PLAYER_TOKENS[cellValue]
                                    : emptyCell,
                        }}
                        className="grid-item"
                    />
                )),
            )}
        </div>
    );
}

const ConnectFour = () => {
    const [grid, setGrid] = useState(getInitialGrid());
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [winner, setWinner]: any = useState(null);
    const [currCol, setCurrCol] = useState(null);

    function onPlayerMove(column: number) {
        const newGrid = grid.map((row) => [...row]);
        let rowToPlace = rows - 1;
        while (newGrid[rowToPlace][column] !== null) {
            rowToPlace--;
        }
        newGrid[rowToPlace][column] = players[currentPlayerIndex];
        if (checkIfPlayerWon(newGrid, rowToPlace, column, players[currentPlayerIndex])) {
            setWinner(players[currentPlayerIndex]);
        }
        setCurrentPlayerIndex(currentPlayerIndex === 0 ? 1 : 0);
        setGrid(newGrid);
    }

    function onColumnHover(index) {
        setCurrCol(index);
    }

    function onRestart() {
        setGrid(getInitialGrid());
        setCurrentColumn(null);
        setCurrentPlayerIndex(0);
        setWinner(null);
    }

    const movesSoFar = grid.reduce((count, row) => {
        return count + row.filter(Boolean).length;
    }, 0);

    const isDraw = movesSoFar === rows * cols;

    const availableColumns = grid[0].map((item, index) => item !== null ? index : -1).filter((item) => item !== -1);

    return (
        <div>
            <PlayerMoveSection availableColumns={availableColumns} currentColumn={currCol} currentPlayer={currentPlayerIndex} onColumnHover={onColumnHover} onPlayerMove={onPlayerMove} />
            <GameGrid grid={grid} />
            {winner}
        </div>
    )
}

export default ConnectFour
