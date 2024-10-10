import React, { useState } from 'react'
import MyRating from './MyRating'
import './styles.css'
import Feedback from './Feedback';

const Rating = ({ selected }: any) => {
    const [currentRatingPage, setCurrentRatingPage] = useState(1);
    const [rating, setRating] = useState(-1);
    const [feedback, setFeedback] = useState('');
    const [showToast, setShowToast] = useState(false);
    const updateLocalStore = () => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
        localStorage.setItem('feedback', JSON.stringify({ rating, feedback }));
        console.log(localStorage.getItem('feedback'));
    }

    return (
        <div>
            <MyRating rating={rating} setRating={setRating} />
            {currentRatingPage === 2 && <Feedback feedback={feedback} setFeedback={setFeedback} />}
            <button onClick={() => {
                if (currentRatingPage === 2) {
                    setCurrentRatingPage(1);
                }
            }}>Previous</button>
            <button onClick={() => {
                if (currentRatingPage === 1) {
                    setCurrentRatingPage(2);
                }
            }} disabled={rating === -1}>Next</button>
            {currentRatingPage === 2 && <button onClick={() => updateLocalStore()}>Submit</button>}
            {showToast && <div className='toast-message'>Your Feedback got updated</div>}
        </div>
    )
}

export default Rating
