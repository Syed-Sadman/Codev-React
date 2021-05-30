import React from 'react'

function FuncClick() {
    function clickHandler(){
        console.log('Functional button clicked');

    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FuncClick;

