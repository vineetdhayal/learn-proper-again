import React, { useState } from 'react'
import Question from './Question';
import questions from './questions';

const FrontendQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers]: any = useState([]);

    const handleNextQuestion = (answer: any) => {
        setUserAnswers([...userAnswers, answer])
    }

    return (
        <div className='quiz'>
            <Question currentQuestion={questions[currentQuestion]} onAnswerClick={(answer) => handleNextQuestion(answer)}/>
        </div>
    )
}

export default FrontendQuiz
