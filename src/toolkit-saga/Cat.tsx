import React, { useEffect, useState } from 'react';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { getCatsfetch } from './catSlice';

const Cat = () => {
    const cats = useSelector((state: any) => state.cats);
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);

    useEffect(() => {
        dispatch(getCatsfetch());
    }, [count])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    )
}

export default Cat
