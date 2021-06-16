import React from 'react';

const withCounter=(WrappedComponent,incrementNum)=>{
    class WithCounter extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
    
        clickcount=(e)=>{
            //  console.log(e);
              this.setState((prevState)=>{
                 return { count:prevState.count+incrementNum} 
              })
          }
        
        render(){
            const {count}=this.state;
            return <WrappedComponent name='Sadman' count={count} increment={this.clickcount} />
        }
        
    }
    return WithCounter;
}


export default withCounter;