import React, { useContext, useRef, useState } from 'react';
import {context} from './context/contextProvider';
import './chess.css';

const MemoryGame = () => {
    const {person, data, clickedd}: any = useContext(context);
    const first = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
    const [clicked, setClicked] = useState(0);
    const [list, setList]: any = useState([]);

    console.log(person, data, clickedd());

    const handleMe = (a: any) => {
        setClicked(clicked + 1);
        setList((prev: any) => [...prev, a]);

        console.log(list);

        if (clicked === 2) {
            if (first[list[0]] === first[list[1]]) {

            }
            else {
                setTimeout(() => setList([]), 3000)
            }
        }
    }

    return (
        <div className='grid'>
            {list.includes(3)}
            {first.map((second, a) => {
                return (<span onClick={() => handleMe(a)} className={`initial ${list.includes(a) ? 'enable' : ''}`} key={a}></span>)
            })}
        </div>
    )
}

export default MemoryGame;
