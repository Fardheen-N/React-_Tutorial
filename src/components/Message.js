import React,{Component} from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message : "welcome to the DW",
            hit : "got you"
        }
    }
    changeMessage(){
        this.setState({
            message:'yoo bro you actually hit the button ,your gonna die'
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Hit me</button>
            </div>
        )
    }
}

export default Message