import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initialState={
    loading:true,
    error:'',
    post:{}
}

const reducer=(state,action)=>{
    switch (action.type) {
        case 'FETCH SUCCESS':
        return{
            loading:false,
            post:action.payload,
            error:''    
        }
        case 'FETCH Error':
        return{
            loading:false,
            post:{},
            error:'Something went wrong'    
        }    
    
        default:
        return state;
    }



}
function DataFetchTwo() {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1 ')
        .then(response=>{
            dispatch({type:'FETCH SUCCESS',payload:response.data})
        })
        .catch(error=>{
           dispatch({type:'FETCH Error'})

        })
    },[])
    return (
        <div>
            {state.loading? 'Loading' : state.post.title}
            {state.error? state.error: null}
        </div>
    )
}

export default DataFetchTwo
