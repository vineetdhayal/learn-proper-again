import React from 'react';
import { UseDispatch, useDispatch, useSelector } from 'react-redux';
import { actions } from './store';

const Main = () => {
    const dispatch = useDispatch();
    let data: any = (useSelector((state) => state) as any);
    console.log(data);
    console.log(actions);
    const product = { name: 'iphone', category: 'phone', color: 'red' };
    return (
        <div>
            {data.counter}
            <button onClick={() => dispatch(actions.increment())}>Add</button>
            <button onClick={() => dispatch(actions.decrement())}>Remove</button>
            <button onClick={() => dispatch(actions.add(10))}>Add</button>
        </div>
    )
}

export default Main
