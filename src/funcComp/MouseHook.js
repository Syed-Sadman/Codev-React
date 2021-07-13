import React,{useState,useEffect} from 'react'

function MouseHook() {
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);


    const logMousePosition=(e)=>{
        console.log("mouse move run")
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        // console.log('useEffect run')
        window.addEventListener('mousemove',logMousePosition)
        return ()=>{
            window.removeEventListener('mousemove',logMousePosition);
        }
    },[])

    return (
        <div>
            Mouse X- {x} and Mouse Y- {y};
        </div>
    )
}

export default MouseHook
