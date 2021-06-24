import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'
class ComponentE extends Component {
    static contextType=UserContext;         //// ComponentE.contextType=UserContext; it can be written instead this line
    render() {
        return (
            <div>
               This is a new context  {this.context}
                <ComponentF/>         
            </div>
        )
    }
}

// ComponentE.contextType=UserContext;

export default ComponentE
