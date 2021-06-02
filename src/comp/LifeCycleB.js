import React from 'react'

class LifeCycleB extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Syed Sadman'
        }
        console.log('Lifecycle method B constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifecycle B getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log('lifecycle B componentDidMount')
    }
    
    render() {
        console.log('render B')
        return (
            <div>
                lifecycleB 
            </div>
        )
    }
}

export default LifeCycleB;
