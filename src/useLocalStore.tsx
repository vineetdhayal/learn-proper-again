import React, { useEffect, useState } from 'react'

const useLocalStore = (key: any, initialValue: any) => {
    const [value, setValue] = useState(() => {
        let currentValue;
        try {
            currentValue = JSON.parse(localStorage.getItem(key) || String(initialValue))
        } catch (error) {
            currentValue = initialValue;
        }

        return currentValue;
    })

    useEffect(() => {
        console.log('i am calling');
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}

export default useLocalStore
