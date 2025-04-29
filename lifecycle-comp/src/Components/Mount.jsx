import React from "react";
import { Component } from "react";
class Mount_comp extends Component{
    constructor(props){
        super(props)
        this.state={time:0,running:false} 
        this.timer=null;
    }

   

    start_stopwatch=()=>{
        if(!this.state.running){
            this.setState({running:true})
            this.timer=setInterval(
                ()=>{
                this.setState((prevState)=>({
                    time:prevState.time+1
                }))
            },1000)
            
        }
    }

    stop_stopwatch=()=>{
        clearInterval(this.timer)
        this.setState({running:false})
    }

    reset_stopwatch=()=>{
        clearInterval(this.timer)
        this.setState({time:0,running:false})
    }

    // componentWillUnmount(){
    //     clearInterval(this.timer)
    //     console.log("Component Unmount")
    // }

    // should update
    shouldComponentUpdate(next_props,next_state){
        let will_update=this.state.time !== next_state.time || this.state.time !== next_state.running;
        console.log("Update:",will_update)
        return will_update

    }

    // snapshot
    getSnapshotBeforeUpdate(prev_props,prevState){
        console.log("Snap shot befor update",prevState.time)
        return prevState.time
    }

    componentDidUpdate(prev_props,prevState,snapshot){
        console.log("After update",snapshot)
        if (snapshot==3){
            clearInterval(this.timer)
            this.setState({running:false})
            console.log("Stopped this")
           
        }
    }



    render(){
        console.log("render")
        let {time,running}=this.state;

        return (
            <div>
                <h1>StopWatch-1</h1>
                <p>{time}</p>
                <h1>IQ-INDIA</h1>
                <button onClick={this.start_stopwatch} disabled={running}>Start</button>
                <button onClick={this.stop_stopwatch} disabled={!running}>Stop</button>
                <button onClick={this.reset_stopwatch}>Reset</button>
                
            </div>
        )

    }



}

export default Mount_comp