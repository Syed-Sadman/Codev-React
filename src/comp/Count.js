import React from 'react'

class Count extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    
    increment(){
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement(){
        this.setState({
            count: this.state.count -1
        })
    }

    render() {
        return (
            <div>
            <div>
                Count - {this.state.count}
            </div>
            
            <button onClick={()=>{this.increment()}}>Increment</button>
            <br></br>
            <button onClick={()=>{this.decrement()}}>Decrement</button>
            </div>

        )
    }
}

export default Count;
