import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
       /*  this.clikchandler = this.clikchandler.bind(this) */
    }
   /*  clikchandler(){
        this.setState({
            message:'Good bye'
        })
    } */
    clikchandler = () =>{
        this.setState({
            message:'Good bye'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
               {/*  <button onClick={this.clikchandler.bind(this)}>Click</button> */}
             {/*    <button onClick={() =>this.clikchandler()}>Click</button> */}
                <button onClick={this.clikchandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
