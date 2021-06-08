import React, { Component } from 'react'

class ClickCount extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    

    clickcount=()=>{
        this.setState({                                         // prevState=>{return count:prevstate.count+1} can be written too
            count:this.state.count+1
        })
    }

    render() {
        const {count}=this.state;
        return (
            <div>
                <button onClick={this.clickcount} > Clicked {count} times</button>     
            </div>
        )
    }
}

export default ClickCount
