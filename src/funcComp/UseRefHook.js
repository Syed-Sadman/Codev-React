import React,{useEffect,useRef} from 'react'



function UseRefHook() {
    const userefhook=useRef(null);

    useEffect(() => {
        userefhook.current.focus()
    
    }, [])
    return (
        <div>
            <input ref={userefhook} type='text'/>
        </div>
    )
}

export default UseRefHook
