import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductStart } from './productSlice';

const productList = () => {
    const dispatch = useDispatch();
    const { loading, items, error }: any = useSelector((state: any) => state.payments);
    useEffect(() => {
        dispatch(fetchProductStart());
    }, []);

    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            {items.map((prod, index) => <div key={index}>{prod.name}</div>)}
        </div>
    )
}

export default productList
