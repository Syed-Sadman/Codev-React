import React,{useContext} from 'react'
import { CounterContext } from '../App'

function CompC() {
    const countContext=useContext(CounterContext)
    return (
        <div>
            <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default CompC
