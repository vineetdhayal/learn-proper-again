import React, { useState } from 'react';

const TableData = ({ rows, cols }: any): any => {
    return <table>
        <tbody>
            {Array.from({ length: rows }, () => 0).map((_, row) => (
                <tr key={row}>
                    {Array.from({ length: cols }, () => 0).map((_, col) => (
                        <td key={row + col}>{col % 2 === 0
                            ? rows * col + (row + 1)
                            : rows * (col + 1) - row}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
}

const Table = () => {
    const [rows, setRows] = useState('');
    const [cols, setCols] = useState('');
    const submitForm = (e: any) => {
        e.preventDefault();
        console.log(e.target);
        console.log(new FormData(e.target).get('rows'));
        setRows(new FormData(e.target).get('rows') as any);
        setCols(new FormData(e.target).get('cols') as any);
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor='rows'>Rows</label>
                    <input type='number' id='rows' name='rows' defaultValue={rows}></input>
                </div>
                <div>
                    <label htmlFor='cols'>Cols</label>
                    <input type='number' id='cols' name='cols' defaultValue={cols}></input>
                </div>
                <button>Submit</button>
            </form>
            <TableData rows={rows} cols={cols} />
        </div>
    )
}

export default Table
