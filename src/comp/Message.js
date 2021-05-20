import React from 'react';

class Msg extends React.Component{
    constructor(){
        super();
        this.state={
            message: 'Welcome visitors'
        };        
    }

    changeMessage(){
        this.setState({
            message:'Thanks for subscribing'
        });
    }


    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
            
        );
    }
    
}

export default Msg;