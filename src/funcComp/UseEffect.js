import React,{useState,useEffect} from 'react'

function UseEffect() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState('');

    useEffect(()=>{
        console.log("useEffect render")
        document.title= `You clicked ${count} times`
    },[count])


    const incCount=()=>{
        setCount((previousCount)=>previousCount+1)
    }
    return (
        <div>

            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
            <button onClick={incCount}>Count clicked {count} times</button>

            
        </div>
    )
}

export default UseEffect