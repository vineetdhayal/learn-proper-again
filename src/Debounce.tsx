import React, { useEffect, useState } from 'react'
import UseDebounce from './UseDebounce';

const Debounce = () => {

    const [value, setValue] = useState('');
    const debouncedValue = UseDebounce(value, 500);

    const handleChange = (e: any) => {
        setValue(e.target.value);
    }

    useEffect(() => {
      console.log(debouncedValue);
    }, [debouncedValue]);

    return (
        <div>
            <input type='text' onChange={(e) => handleChange(e)}></input>
        </div>
    )
}

export default Debounce
