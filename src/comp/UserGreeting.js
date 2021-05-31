import React from 'react'

class UserGreeting extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {

        return(
            this.state.isLoggedIn?<div>Hello To myself</div>:<div>Hello guest</div>
        )        

        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Welcome to myself
        //         </div>
        //     )
        // }else{
        //   return(  <div>
        //         welcome Guest
        //     </div>
        //   )
        //  }
        // return (
        //     <div>
        //           <div>hello to myself</div>
        //           <div> Welcome Guest</div> 
        //     </div>
        // )
    }
}

export default UserGreeting
