import data from './data.json';
import React, { useCallback, useState } from 'react';

const headers = [
    { key: "id", label: "ID" },
    { key: "first_name", label: "First name" },
    { key: "last_name", label: "Last name" },
    { key: "email", label: "Email" },
    { key: "gender", label: "Gender" },
    { key: "ip_address", label: "IP address" },
];

const SortButton = (props: any) => <td><button onClick={props.onClick}>{props.btn}</button></td>

const SortableTable = () => {
    const [sort, setSort] = useState('');

    function sortData() { return data.sort((a: any, b: any) => { return a[sort] > b[sort] ? 1 : -1 }) };
    const handleClick = (e: any) => {
        setSort(e.key);
    }

    const sortedData = useCallback(() => sortData(), [sort, data]);

    return (
        <table>
            <thead>
                <tr>
                    {headers.map((h, index) => { return <SortButton key={h.key} btn={h.label} onClick={() => handleClick(h)}></SortButton> })}
                </tr>
            </thead>
            <tbody>
                {sortedData().map((data, index) => {
                    return <tr key={index}>
                        <td>
                            {data.id}
                        </td>
                        <td>{data.first_name}</td>
                        <td>{data.last_name}</td>
                        <td>{data.email}</td>
                        <td>{data.gender}</td>
                        <td>{data.ip_address}</td>
                    </tr>
                })}
            </tbody>
            <tbody>
                <tr></tr>
            </tbody>
        </table>
    )
}

export default SortableTable
