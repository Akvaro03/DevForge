import { useState } from "react";

function useCount(initialState: number): { count: number, addCount: (a: number) => void, restCount: () => void } {
    
    const [count, setCount] = useState(initialState)
    const addCount = (numAdd: number = 1) => {
        setCount(prev => prev + numAdd)
    }
    const restCount = () => {
        setCount(initialState)
    }

    return { count, addCount, restCount }
}

export default useCount;