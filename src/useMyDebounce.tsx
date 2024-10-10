import { useEffect, useMemo, useState } from "react"

export const useMyDebounce = (value, wait) => {
    const [debouncedValue, setDebouncedvalue] = useState('');
    useMemo(() => {
        console.log('render');
        const timer = setTimeout(() => {
            setDebouncedvalue(value);
        }, 500)
        return () => clearTimeout(timer);
    }, [value, wait])

    return [debouncedValue]
}
