import React,{Component} from 'react'

class Welcome extends Component{
    render(){
        return <h1>YOOOOO {this.props.name} the {this.props.heroName}</h1>
    }
}

export default Welcome