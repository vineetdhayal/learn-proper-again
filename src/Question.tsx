import React from 'react'

const Question = ({ currentQuestion, onAnswerClick }: any) => {
    console.log(currentQuestion);
    return (
        <div>
            <h2>{currentQuestion.question}</h2>
            <ul className='options'>
                {currentQuestion.answerOptions.map((q: any, index: any) => {
                    return (<li key={q.value}>
                        <button onClick={() => onAnswerClick(q.isCorrect)}>{q.value}</button>
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default Question
