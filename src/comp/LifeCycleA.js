import React from 'react'
import LifeCycleB from './LifeCycleB'
class LifeCycleA extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Syed Sadman'
        }
        console.log('Lifecycle method A constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifecycle A getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log('lifecycle A componentDidMount')
    }
    
    render() {
        console.log('render A')
        return (
            <div>
                lifecycleA
                <LifeCycleB/> 
            </div>
        )
    }
}

export default LifeCycleA;
