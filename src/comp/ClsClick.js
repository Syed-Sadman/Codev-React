import React from 'react'

class ClsClick extends React.Component {
    handleClick=()=>{
        console.log('Class button clicked')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Class button</button>
            </div>
        )
    }
}

export default ClsClick
