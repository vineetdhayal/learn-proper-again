import React, { useState } from 'react';
import './star.css';

const Rating = () => {
    const arr = Array(5).fill(0);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const isActive = (index: any) => {
        if (rating) {
            return hover ? hover >= index : rating >= index;
        }
        return rating >= index || hover >= index;
    }

    return (
        <div>
            {arr.map((x, index) => <span key={index} className={`star ${(isActive(index)) ? 'active' : ''}`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(0)}
            ></span>)}
        </div>
    )
}

export default Rating
