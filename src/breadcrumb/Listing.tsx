import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Listing = () => {
    const params = useParams();
    console.log('params', params);
    const [data, setData]: any = useState([]);

    const fetchData = async () => {
        const res = await fetch(`https://dummyjson.com/products/${params.id}`);
        const data = await res.json();
        setData(data);
        console.log(data);
    }

    useEffect(() => {
        fetchData();
    }, [params.id]);

    if (Object.keys(data).length) {
        return (
            <div>
                {data && data.title}
            </div>
        )
    }
}

export default Listing
