import React from 'react';
import {actions} from './store';
import {useDispatch, useSelector } from 'react-redux';

const Redux = () => {
    const dispatch = useDispatch();
    let data: any = (useSelector((state) => state) as any);
    console.log(data);
    const product: any = { name: 'iphone', category: 'phone', color: 'red' };
    return (
        <div>
            {data.map((z: any, index: number) =>  <span key={index}>{z.name}</span>)}
            <button onClick={() => dispatch(actions.addData(product))}>Add</button>
            <button onClick={() => dispatch(actions.removeData(product))}>Remove</button>
        </div>
    )
}

export default Redux
