import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(()=> {
        const timeout = setTimeout(()=>{
            setDebounceValue(value);
            console.log('debounceValue',value);
        }, delay)
        return () => clearTimeout(timeout);
    },[value])

    return debounceValue;
}

export default useDebounce;