import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
class ClickCount extends Component {
 
    render() {
        const {count,increment}=this.props;
        return (
            <div>
                <button onClick={increment} > Clicked {count} times</button>     
            </div>
        )
    }
}

export default UpdatedComponent(ClickCount);
