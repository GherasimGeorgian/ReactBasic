import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>WelcomeX</div>


        /* return this.state.isLoggedIn ? (
            <div>Welocme1</div>
        ) : (
            <div>Welcome2</div>
        ) */


     /*    let message
        if(this.state.isLoggedIn){
            message = <div>Welocme1</div>
        }
        else{
            message = <div>Welcome2</div>
        }
    return <div>{message}</div> */




         /*  if(this.state.isLoggedIn){
              return <div> Welocme1 </div>
          }    
          else{ 
            return <div> Welocme2</div>
        } */
     }
}

export default UserGreeting
