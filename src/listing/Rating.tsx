import React from 'react'
import './styles.css'

const Rating = ({ rating }) => {
    return (
        <div className='flex'>
            {new Array(5).fill(null).map((x, index) => <div key={index} className={index < rating ? 'black star' : 'star'}></div>)}
        </div>
    )
}

export default Rating
