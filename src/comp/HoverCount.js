import React, { Component } from 'react'
import withCounter from './withCounter';



class HoverCount extends Component {
    render() {
 
        const {count,increment}=this.props;
        return (
            <div>
             <h2 onMouseOver={increment} >Hovered {count} times</h2>   
            </div>
        )
    }
}

export default withCounter(HoverCount);
