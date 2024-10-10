import React, { useState } from 'react';
import './pixel.css';

const COLORS = {
    white: '#fff',
    gray: '#e9ecef',
    black: '#000',
    red: '#cc0001',
    orange: '#fb940b',
    yellow: '#ffff01',
    green: '#01cc00',
    teal: '#38d9a9',
    blue: '#228be6',
    purple: '#7950f2',
    beige: '#ff8787',
} as const;

const Cell = ({ grid, onMark, rowIndex, index }: any) => {
    return <div onClick={onMark} onMouseDown={onMark} onMouseEnter={onMark} style={{ backgroundColor: grid[rowIndex][index] ? grid[rowIndex][index] as any : '#e9ecef', width: '20px' }}></div>
}

const Canvas = ({ selectedColor, mode, rows = 15, cols = 15 }) => {
    const [grid, setGrid] = useState(Array.from({ length: rows }, () => Array.from({ length: cols }).fill(null)));
    console.log(grid);
    const [isDragging, setIsDragging] = useState(false);
    return <div className='grid' onMouseDown={() => setIsDragging(true)} onMouseUp={() => setIsDragging(false)}>
        {grid.map((row, rowIndex) => {
            return row.map((col, index) => {
                return <Cell key={rowIndex + index} grid={grid} rowIndex={rowIndex} index={index} onMark={() => {
                    const newGrid = grid.map((x) => [...x]);
                    newGrid[rowIndex][index] = mode === 'erase' ? null : selectedColor;
                    setGrid(newGrid);
                }}></Cell>
            })
        })}
    </div>
};

const Toolbar = ({ selectedColor, onChangeColor, mode, onModeChange }: any) => {
    const onColorClick = (color) => {
        onChangeColor(color);
        onModeChange('draw');
    };

    return <div className="toolbar">
        <button onClick={() => onModeChange('draw')} className={['toolbar_mode', mode === 'draw' && 'toolbar_mode--selected'].filter(Boolean).join(' ')}>Draw</button>
        <button onClick={() => onModeChange('erase')} className={['toolbar_mode', mode === 'erase' && 'toolbar_mode--selected'].filter(Boolean).join(' ')}>Erase</button>
        <div className='toolbar__color-picker'>
            {Object.entries(COLORS).map(([color, hex]: any) => {
                return <button className={selectedColor === color ? 'toobar_color--selected' : undefined} style={{ backgroundColor: hex }} onClick={() => onColorClick(color)}></button>
            })}
        </div>
    </div>
};

const PixelArt = () => {
    const [mode, setMode] = useState('draw');
    const [selectedColor, setSelectedColor] = useState('black');

    return (
        <div>
            <Canvas selectedColor={selectedColor} mode={mode} />
            <Toolbar selectedColor={selectedColor}
                onChangeColor={setSelectedColor}
                mode={mode}
                onModeChange={setMode} />
        </div>
    )
}

export default PixelArt
