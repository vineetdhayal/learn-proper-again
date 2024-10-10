import React, { useEffect, useMemo, useState } from 'react'

const UseDebounce = (value: any, wait: 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useMemo(() => {
        console.log('renderd')
        let timer = setTimeout(() => {
            setDebouncedValue(value);
        }, wait);

        return () => clearTimeout(timer)
    }, [wait, value]);

    return debouncedValue;
}

export default UseDebounce
