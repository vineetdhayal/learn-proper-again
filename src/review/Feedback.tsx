import React from 'react';
import './styles.css'

const Feedback = ({ feedback, setFeedback }: any) => {
    return (
        <div>
            <textarea onChange={(e) => setFeedback(e.target.value)}></textarea>
        </div>
    )
}

export default Feedback
