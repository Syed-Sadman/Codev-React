import React, { Component } from 'react'

export class CountTwo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    increment=(e)=>{
        //  console.log(e);
          this.setState((prevState)=>{
             return { count:prevState.count+1} 
          })
      }
    render() {
        return (
            <div>
              {this.props.render(this.state.count,this.increment)}  
            </div>
        )
    }
}

export default CountTwo
