import React, { useEffect } from 'react';
import useLocalStore from './useLocalStore';

const Test = () => {
    const [value, setValue] = useLocalStore('myKey', 'refd');

    useEffect(() => {
        setValue('i am added here')
    }, []);

    return (
        <div>
            {value}
        </div>
    )
}

export default Test
