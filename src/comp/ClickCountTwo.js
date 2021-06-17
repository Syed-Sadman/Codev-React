import React, { Component } from 'react'

class ClickCountTwo extends Component {
    render() {
        const{count, increment}=this.props;
        return (
            <div>
                  <button onClick={increment} > Clicked {count} times</button>              
            </div>
        )
    }
}

export default ClickCountTwo
