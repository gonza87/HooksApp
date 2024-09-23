import { useState } from "react"
export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = () => {
        setCounter(prev => prev + 1);
    }

    const decrement = () => {
        if(counter >= 1) {setCounter(prev => prev -1)}
    }

    return{
        counter,
        increment,
        decrement
    }
}
