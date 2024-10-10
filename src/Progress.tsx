import React, { useEffect, useRef, useState } from 'react';
import './Progress.css'

const Progress = ({ fill, index, setFill }: any) => {
    const [part, setPart] = useState(0);
    let timer: any = useRef(null);

    useEffect(() => {
        console.log('i am called');
        if (index < fill + 3) {
            if (part !== 100) {
                timer.current = setInterval(() => {
                    setPart((part: any) => {
                        // console.log(part);
                        return part + 1;
                    });
                }, 80);

                return () => clearInterval(timer.current);
            }
        }
    }, [fill]);

    useEffect(() => {
        if (part === 100) {
            console.log('hrello')
            clearInterval(timer.current);
            setFill(fill + 1);
        }
    }, [part])

    return (
        <div className='initial'>
            <span className={`${part > 52}` ? 'color' : ''}>{part}%</span>
            <div style={{ width: `${part}%`, backgroundColor: 'green' }}></div>
        </div>
    )
}

export default Progress
