import React from 'react'

const UndoableCounterHistory = ({ history }) => {
    console.log(history);
    return (
        <table>
            <thead>
                <tr>
                    <td>Exp</td>
                    <td>Prev</td>
                    <td>Latest</td>
                </tr>
            </thead>
            <tbody>
                {history.map(({ exp, counter, newCounter }: any, index: number) => {
                    return (<tr key={index}>
                        <td>{exp}</td>
                        <td>{counter}</td>
                        <td>{newCounter}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default UndoableCounterHistory
