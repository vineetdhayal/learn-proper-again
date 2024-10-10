import React, { useEffect, useState, useRef } from 'react'

const Page = () => {
    const [data, setData] = useState([]);
    const [page, setpage] = useState(1);
    const maxPages: any = useRef(null);
    const fetchData = async () => {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        setData(data.products);
        maxPages.current = Math.floor(data.products.length / 10);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {data.slice(page, page * 10 + 10).map((x: any, index: number) => {
                return <div>{x.title}</div>
            })}
            <div style={{ display: 'flex' }}>
                {Array(maxPages.current).fill(0).map((c, index) => {
                    return <div onClick={() => setpage(index + 1)} style={{ height: '20px', width: '20px', border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>{index + 1}</div>
                })}
            </div>
        </div>
    )
}

export default Page
