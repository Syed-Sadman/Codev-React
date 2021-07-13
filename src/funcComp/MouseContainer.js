import React,{useState} from 'react'
import MouseHook from './MouseHook';

function MouseContainer() {
    const [display, setDisplay] = useState(true);

    const disp=()=>{
        setDisplay(!display);

    }
    return (
        <div>
            <button onClick={disp}>Toggle display</button>
            {display && <MouseHook/>}
        </div>
    )
}

export default MouseContainer

