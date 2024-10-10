import React, { useState } from 'react';
import './dice.css'

const NUMBER_OF_FACES = 6;
const MIN_NUMBER_OF_DICE = 1;
const MAX_NUMBER_OF_DICE = 12;

const DICE_FACE_DOT_POSITIONS: Record<number, any> = {
    1: ['dot--center'],
    2: ['dot--top-right', 'dot--bottom-left'],
    3: ['dot--top-right', 'dot--center', 'dot--bottom-left'],
    4: [
        'dot--top-left',
        'dot--top-right',
        'dot--bottom-left',
        'dot--bottom-right',
    ],
    5: [
        'dot--top-left',
        'dot--top-right',
        'dot--center',
        'dot--bottom-left',
        'dot--bottom-right',
    ],
    6: [
        'dot--top-left',
        'dot--top-right',
        'dot--center-left',
        'dot--center-right',
        'dot--bottom-left',
        'dot--bottom-right',
    ],
};

const Dice = ({ diceValue }: any) => {
    return <div className='dices'>
        {DICE_FACE_DOT_POSITIONS[diceValue].map((x, ind) => {
            return <div key={ind} className={['dot', x].filter(Boolean).join(' ')}></div>
        })}
    </div>
}

const RollDice = () => {
    const [count, setCount] = useState();
    return (
        <div className='wrapper'>
            <form onSubmit={(e: any) => {
                e.preventDefault();
                const formData: any = new FormData(e.target);
                setCount(formData.get('dice-count'));
            }}>
                <label htmlFor='dice-count'></label>
                <input id="dice-count" name='dice-count' min={MIN_NUMBER_OF_DICE} max={MAX_NUMBER_OF_DICE}></input>
                <button>Roll Dice</button>
            </form>
            <div className='dice-list'>
                {new Array(count).fill(Math.floor(Math.random() * 6)).map((dice, index) => {
                    return <Dice diceValue={dice} key={index} />
                })}
            </div>
        </div>
    )
}

export default RollDice
