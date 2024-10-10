import React, { useCallback, useEffect, useState } from 'react';
import './wordle.css';

const WORDS: any = Object.freeze([
    'APPLE',
    'BEAST',
    'FAINT',
    'FEAST',
    'FRUIT',
    'GAMES',
    'PAINT',
    'PASTE',
    'TOWER',
    'REACT',
]);

const LETTER_GUESS_STATE: any = Object.freeze({
    INDETERMINATE: 'INDETERMINATE',
    ABSENT: 'ABSENT',
    PRESENT: 'PRESENT',
    CORRECT: 'CORRECT',
});

const LETTER_GUESS_STATE_PRIORITY: any = Object.freeze({
    INDETERMINATE: 1,
    ABSENT: 2,
    PRESENT: 3,
    CORRECT: 4,
});

const KEYBOARD_LAYOUT = Object.freeze([
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace'],
]);

const GAME_STATE: any = Object.freeze({
    IN_PROGRESS: 'IN_PROGRESS',
    GUESSED_CORRECTLY: 'GUESSED_CORRECTLY',
    NO_MORE_GUESSES: 'NO_MORE_GUESSES',
});

function generateRandomWord() {
    return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function getInitialLetterGuessState() {
    return {};
}

function countFreqInWord(word) {
    let freq = new Map();
    for (let i = 0; i < word.length; i++) {
        if (!freq.has(word[i])) {
            freq.set(word[i], 0);
        }
        freq.set(word[i], freq.get(word[i] + 1));
    }

    return freq;
}

function getInitialGridState(words, size) {
    return Array.from({ length: words }, () => {
        return Array.from({ length: size }, () => {
            return {
                char: '',
                state: LETTER_GUESS_STATE.INDETERMINATE
            }
        })
    })
}

function LetterGrid({ letters }: any) {
    console.log(letters);
    return (<section className='grid-section'
        style={{ gridTemplateColumns: `repeat(${letters[0].length}, 40px)`, gridTemplateRows: `repeat(${letters.length}, 40px)` }}
    >
        {letters.map((letterRow, rowIndex) => letterRow.map(({ char, state }, colIndex) => (
            <div className='grid-cell' key={rowIndex + colIndex}>
                {char}
            </div>
        )))}
    </section>)
}

const KeyBoard = ({ onPressKey }) => {
    return <section className='keyboard-section'>
        {KEYBOARD_LAYOUT.map((row, rowIndex) => {
            return (<div key={rowIndex} className='keyboard-row'>
                {row.map((char) => <button className='keyboard-row--button' onClick={() => onPressKey(char)}>

                    {(() => {
                        switch (char) {
                            case 'Enter':
                                return 'ENTER'
                            case 'Backspace':
                                return 'DEL'
                            default:
                                return char;
                        }
                    })()}
                </button>)}
            </div>)
        })}
    </section>
}

const Wordle = () => {
    const INITIAL_CURSOR_POSITION = [0, -1];
    const [wordOfDay, setWordOfDay] = useState(generateRandomWord());
    const [gameState, setGameState] = useState(GAME_STATE.IN_PROGRESS);
    const [gridState, setGridState] = useState(getInitialGridState(6, 5));
    const [position, setPosition] = useState(
        [0, -1],
    );
    const [letterGuessState, setLetterGuessState] = useState(
        () => getInitialLetterGuessState(),
    );

    const resetGame = useCallback(() => {
        setWordOfDay(generateRandomWord());
        setGridState(getInitialGridState(6, 5));
        setPosition(INITIAL_CURSOR_POSITION);
        setGameState(GAME_STATE.IN_PROGRESS);
        setLetterGuessState(getInitialLetterGuessState());
    }, [])

    useEffect(() => { resetGame() }, [resetGame]);

    function addLetter(char: any) {
        console.log(char, position);
        const [row, col] = position;
        if (col + 1 === 6) {
            return
        }
        const newGridState = Array.from(gridState);
        newGridState[row][col + 1].char = char.toUpperCase();
        let newCol = col + 1;
        let newRow = row;
        let newPos = [newRow, newCol];
        console.log(newPos);
        setPosition(newPos);
        setGridState(newGridState);
    }

    function deleteLetter() {
        const [row, col] = position;
        if (col === -1) {
            return;
        }
        const newGridState = Array.from(gridState);
        newGridState[row][col].char = '';
        setPosition([row, col - 1]);
        setGridState(newGridState);
    }

    function checkWord() {
        const [row, col] = position;
        if (col + 1 < 5) {
            return;
        }
        const newGridState: any = Array.from(gridState);
        const newLetterGuessState: any = { ...letterGuessState };
        const word = gridState[row].map(({ char }) => char).join('');
        const letterFreq = countFreqInWord(wordOfDay);
        const nonMatchingIndex = [];
        let matches = 0;
        for (let i = 0; i < word.length; i++) {
            const currentChar = word[i];
            const currActualChar = wordOfDay[i];
            if (currentChar === currActualChar) {
                newGridState[row][i].state = LETTER_GUESS_STATE.CORRECT;
                newLetterGuessState[currentChar] = LETTER_GUESS_STATE.CORRECT;
                letterFreq.set(currentChar, letterFreq.get(currentChar) - 1);
                matches++;
            }
            else {
                nonMatchingIndex.push(i);
            }
        }

        if (matches === 5) {
            setLetterGuessState(newLetterGuessState);
            setGridState(newGridState);
            setGameState(GAME_STATE.GUESSED_CORRECTLY);
            return;
        }

        nonMatchingIndex.forEach((idx) => {
            const char = word[idx];
            if (letterFreq.has(char) && letterFreq.get(char) > 0) {
                letterFreq.set(char, letterFreq.get(char) - 1);
                newGridState[row][idx].state = LETTER_GUESS_STATE.PRESENT;
                if (LETTER_GUESS_STATE_PRIORITY[LETTER_GUESS_STATE.PRESENT] > LETTER_GUESS_STATE_PRIORITY[newLetterGuessState[char] ?? LETTER_GUESS_STATE.INDETERMINATE]) {
                    newLetterGuessState[char] = LETTER_GUESS_STATE.PRESENT;
                }
                else {
                    newLetterGuessState[row][idx].state = LETTER_GUESS_STATE.ABSENT;
                    if (LETTER_GUESS_STATE_PRIORITY[LETTER_GUESS_STATE.ABSENT] > LETTER_GUESS_STATE_PRIORITY[newLetterGuessState[char] ?? LETTER_GUESS_STATE.INDETERMINATE]) {
                        newLetterGuessState[char] = LETTER_GUESS_STATE.ABSENT;
                    }
                }
            }
            setLetterGuessState(newLetterGuessState);
            setGridState(newGridState);
            if (row + 1 === 6) {
                setGameState(GAME_STATE.NO_MORE_GUESSES);
                return;
            }
            setPosition([row + 1, -1]);
        })
    }

    function onPressKey(key) {
        if (gameState !== GAME_STATE.IN_PROGRESS) {
            return;
        }
        switch (key) {
            case 'Enter':
                checkWord();
                break;
            case 'Backspace':
                deleteLetter();
                break;
            default:
                addLetter(key);
        }
    }

    useEffect(() => {
        function onKeyDown(event) {
            onPressKey(event.key);
        }
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        }
    }, [])

    return (
        <div>
            <LetterGrid letters={gridState} />
            <KeyBoard onPressKey={onPressKey} />
        </div>
    )
}

export default Wordle
