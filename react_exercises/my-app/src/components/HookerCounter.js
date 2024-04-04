
import React, { useEffect, useState } from "react";

export function Counter({ initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue);
    
    useEffect(() => {
        console.log(counter);
    }, [counter]);

    function increment() {
        setCounter((prevCounter) => prevCounter + 1);
    }

    function decrement() {
        setCounter((prevCounter) => prevCounter - 1);
    }

    function reset() {
        setCounter(initialValue);
    }

    return {
        counter: counter,
        increment: increment,
        decrement: decrement,
        reset: reset,
    }
}

export function useCounter(initialValue = 0) {
	const [counter, setCounter] = useState(initialValue)

	const handleCounterIncrement = function handleCounterIncrement() {
		setCounter((c) => c + 1)
	}

	const handleCounterDecrement = function handleCounterDecrement() {
		setCounter((c) => c - 1)
	}

	const handleCounterReset = function handleCounterReset() {
		setCounter(initialValue)
	}

	return {
		counter: counter,
		onIncrement: handleCounterIncrement,
		onDecrement: handleCounterDecrement,
		onReset: handleCounterReset,
	}
}


export default function HookerCounter({ initialValue = 0 }) {
    const { counter, increment, decrement, reset } = Counter({ initialValue });

    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
