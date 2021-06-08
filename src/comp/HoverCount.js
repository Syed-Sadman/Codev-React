import React, { Component } from 'react'

class HoverCount extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    mouseHover=()=>{
        this.setState({
            count:this.state.count+1
        })
    }


    render() {
        console.log('hovered now')
        const{count}=this.state;
        return (
            <div>
             <h2 onMouseOver={this.mouseHover} >Hovered {count} times</h2>   
            </div>
        )
    }
}

export default HoverCount
