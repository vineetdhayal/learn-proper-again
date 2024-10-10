import React, { useEffect, useState } from 'react'
import Product from './Product'
import Rating from './Rating';
import './styles.css';

const Review = () => {
    const [selected, setSelected] = useState('');
    const [showRating, setShowRating] = useState(false);

    useEffect(() => {
        if (selected) {
            setShowRating(true);
        }
    }, [selected])

    return (
        <div className='flex'>
            <Product selected={selected} setSelected={setSelected} />
            {showRating && <Rating selected={selected}/>}
        </div>
    )
}

export default Review
