import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        setData(data.products);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {data.map((d: any, index) => {
                return <Link key={index} to={`/products/${index}`}>{d.title}</Link>
            })}
        </div>
    )
}

export default Home
