import React from 'react';
import { addToCart, removeToCart } from './action';
import { UseDispatch, useDispatch, useSelector } from 'react-redux';

const Main = () => {
    const dispatch = useDispatch();
    let data: any = useSelector((state) => state) as any;
    console.log(data);
    const product = { name: 'iphone', category: 'phone', color: 'red' };
    return (
        <div>
            {data.map((z: any, index: number) =>  <span key={index}>{z.name}</span>)}
            <button onClick={() => dispatch(addToCart(product))}>Add</button>
            <button onClick={() => dispatch(removeToCart(product))}>Remove</button>
        </div>
    )
}

export default Main
