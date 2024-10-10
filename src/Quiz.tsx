import React, { useState } from 'react';

const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
        answer: 'Paris',
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: [
            'Charles Dickens',
            'William Shakespeare',
            'J.K. Rowling',
            'Mark Twain',
        ],
        answer: 'William Shakespeare',
    },
    {
        question: 'What is the square root of 64?',
        options: ['6', '7', '8', '9'],
        answer: '8',
    },
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleNextQuestion = () => {
        if (currentQuestion === questions.length - 1) {
            setShowScore(true);
        }
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption('');
    }

    return (
        <div>
            {showScore ? score : (
                <div>
                    <div>{questions[currentQuestion].question}</div>
                    {questions[currentQuestion].options.map((q, index) => {
                        return <>
                            <input type='radio' key={index} value={q} checked={selectedOption === q} onChange={() => setSelectedOption(q)}></input>
                            <label>{q}</label>
                        </>
                    })}
                    <button onClick={handleNextQuestion}>Next</button>
                </div>
            )}
        </div>
    )
};

export default Quiz;