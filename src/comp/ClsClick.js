import React from 'react'

class ClsClick extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name :' Hello Sadman'
        }
      //  this.handleClick=this.handleClick.bind(this)  //binding in the constructor is the ideal way rather than using arrow function on the render method or in the method add in line 12
    }
    handleClick=()=>{                       // this is class property feature // handleClick is a class property 
        this.setState({
            name :'Sabbir clicked the button'
        });
    }
    render() {
        const {name}=this.state
        return (
            <div>
                <h1>{name}</h1>
                <button onClick={this.handleClick}>Class button</button>
            </div>
        )
    }
}

export default ClsClick;
