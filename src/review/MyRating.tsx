import React, { useState } from 'react'
import './styles.css'

const MyRating = ({ rating, setRating }: any) => {

    const applyClass = (index): any => {
        if (index <= rating) {
            return 'star active'
        }
        return 'star';
    }

    return (
        <div>
            {Array(5).fill('').map((x, index) => <i onClick={() => setRating(index)} className={applyClass(index)}></i>)}
        </div>
    )
}

export default MyRating
