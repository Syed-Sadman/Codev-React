import React,{useState,useEffect,useRef} from 'react'





function TimerHook() {
const [state, setTimer] = useState(0)
const timeRef = useRef()
useEffect(() => {
    timeRef.current=setInterval(()=>{
        setTimer(prevState=>prevState+1)
    },1000)
    return () => {
        clearInterval(timeRef.current)
    }
}, [])
    return (
        <div>
            Hook timer - {state}
            <button onClick={()=>clearInterval(timeRef.current)}> Clear interval</button>
        </div>
    )
}

export default TimerHook
