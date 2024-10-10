import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './data.css'

const Home = () => {
    const [products, setProducts] = useState([]);
    const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log(data);
        setProducts(data.products.slice(0, 6));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <span>Product Details</span>
            <div className='product-grid'>{products.map((p: any, index: any) => {
                return (<div className='product-card' key={index}>
                    <Link to={`product/${p.id}`}></Link>
                    <img src={p.thumbnail} alt={p.title}></img>
                    <span>{p.title}</span>
                </div>)
            })}</div>
        </div>
    )
}

export default Home
