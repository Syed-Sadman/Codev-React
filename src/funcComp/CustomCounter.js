import React from 'react'
import useCounter from '../CustomHooks/useCounter'

function CustomCounter() {
const [count,increment,decrement,reset]=useCounter(100,5);

    return (
        <div>
            Count = {count}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CustomCounter
