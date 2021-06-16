import React, { Component } from 'react'
import withCounter from './withCounter';

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

export default withCounter(ClickCount,6);
