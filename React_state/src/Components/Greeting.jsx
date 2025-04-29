import React, { Component } from "react";

class Greetings extends Component{
    constructor(){
        super()
        this.state={is_morning:true}
    }

    toggleTime=()=>{
        (this.setState({is_morning:!this.state.is_morning}))
    };

    render(){
        let message;
        if (this.state.is_morning){
            message="Good Morning 🌄"
        }
        else{
            message="Good Evening 🌚"
        }

        return (
            <div className="box">
            <h2>{message}</h2>
            {/* <h2>{this.state.is_morning ? "Good Morning 🌄":"Good Evening 🌚"}</h2> */}
            <button onClick={this.toggleTime}>{this.state.is_morning ? "Say Good Evening 🌚" : "Say Good Morning 🌄"}</button>
            </div>
        )
    }
}

export default Greetings;