import React,{useReducer} from 'react'


const initialState={
    firstCount:0,
    secondCount:20
};
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state,firstCount:state.firstCount+action.value};
        case 'decrement':
            return {...state,firstCount:state.firstCount-action.value};
        //secondCount case
        case 'increment2':
            return {...state,secondCount:state.secondCount+action.value};
        case 'decrement2': 
            return {...state,secondCount:state.secondCount-action.value};    
        case 'reset':
            return initialState; 
        default:
            return state;           
    }
}


function UseReduceTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <p>Count {count.firstCount} </p>
            <p>Count two {count.secondCount} </p>
            
            <button onClick={()=>dispatch({type:'increment',value:1})}>Increment 1</button>
            <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement 1</button>
            <button onClick={()=>dispatch({type:'increment',value:5})}>Increment 5</button>
            <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement 5</button>
            {/* secondCount buttons below */}
            <button onClick={()=>dispatch({type:'increment2',value:1})}>Increment two </button>
            <button onClick={()=>dispatch({type:'decrement2',value:1})}>Decrement two</button>

            <button onClick={()=>dispatch({type:'reset'})}>Reset</button> 
        </div>
    )
}

export default UseReduceTwo

