import React,{useState,useEffect} from 'react'

function MouseHook() {
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);


    const logMousePosition=(e)=>{
        console.log("function mouse position run")
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        console.log('useEffect run')
        window.addEventListener('mousemove',logMousePosition)
    },[])

    return (
        <div>
            Mouse X- {x} and Mouse Y- {y};
        </div>
    )
}

export default MouseHook
