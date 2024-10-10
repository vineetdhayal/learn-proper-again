import React, { useEffect, useState } from 'react';
import './styles.css';
import Products from './Products';
import Filters from './Filters';

const Listing = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [proper, setProper] = useState([]);

    const fetchData = async () => {
        const data = await fetch('http://api.devtoolstech.in/ecommerce/products');
        const res = await data.json();
        console.log(res);
        setProducts(res);
        setProper(JSON.parse(JSON.stringify(res)));
        const data1 = await fetch('http://api.devtoolstech.in/ecommerce/categories');
        const res1 = await data1.json();
        console.log(res1);
        setCategory(res1);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const applyFilters = (from, to, selected) => {
        console.log(from, to, selected);
        console.log('yes changed', products);
        const newProd = JSON.parse(JSON.stringify(products)).filter((p: any) => {
            if (selected.length) {
                if (p.price > from && p.price < to && selected.includes(p.color)) {
                    return true;
                }
                return false;
            }
            if (p.price > from && p.price < to) {
                return true;
            }
            return false;
        });
        console.log(newProd, 'newProd');
        setProper(newProd);
    }

    return (
        <>
            <div className='categories'>
                {category.length && category.map((c, index) => { return <div className='category'>{c.name}</div> })}
            </div>
            <div className='flex'>
                <Filters data={products} applyFilters={applyFilters} />
                <Products data={proper} />
            </div>
        </>
    );
}

export default Listing
