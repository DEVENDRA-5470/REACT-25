import React, { Component } from "react";

class Random_picker extends Component{
    constructor(props){
        super(props);
        this.state ={random_number : 0}
    }

    generate_number = ()=> {this.setState({random_number : Math.round(Math.random()*2000)})
    console.log(this.state.random_number)
    
}


render(){
    return (
        <div>
                <h1>{this.state.random_number}</h1>
                <button onClick={this.generate_number}>Generate Number </button>
            </div>
        )
    }
}

export default Random_picker