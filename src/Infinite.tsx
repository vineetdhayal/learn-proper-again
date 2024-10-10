import React, { useCallback, useEffect, useState } from 'react';

const Infinite = () => {
    const [items, setItems]: any = useState([]);
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(0);

    const fetchData = useCallback(async () => {
        if (loading) {
            return;
        }

        console.log('here');
        setLoading(true);
        const data = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${index * 10}&limit=10`);
        const final = await data.json();
        console.log('final', final);
        setItems([...items, ...final]);
        setIndex((prev) => prev + 1);
        setLoading(false);
    }, [index]);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } =
                document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 20) {
                console.log('coming');
                fetchData();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [fetchData]);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {items?.map((item, index) => {
                return <h1 key={index}>{item.title}</h1>
            })}
        </div>
    )
}

export default Infinite
