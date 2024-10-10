import React, { useEffect, useState } from 'react'
import { useMyDebounce } from './useMyDebounce';

const Fetch = () => {
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);
    const [debouncedValue] = useMyDebounce(value, 500);

    const fetchData = async () => {
        const data = await (await fetch(`https://dummyjson.com/products/search?q=${value}`)).json();
        console.log(data);
        setData(data.products);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
             <table>
                <thead>
                    <tr>
                        <th>brand</th>
                        <th>category</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((x: any, index) => {
                        return <tr key={index}>
                            <td>{x.brand}</td>
                            <td>{x.category}</td>
                            <td>{x.price}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Fetch
