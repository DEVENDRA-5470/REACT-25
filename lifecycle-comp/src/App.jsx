import React, { Component } from "react";
import Mount_comp from "./Components/Mount";
import User_list from "./Components/User_lists";
class App extends Component{
  // constructor(props){
  //   super(props)
  //   this.state={show_Timer:true}
  // }

  // show_hide_timer=()=>{
  //   this.setState((prevState)=>({
  //     show_Timer:!prevState.show_Timer
  //   }))
  // }


  render(){
    return (
      // <div>
      //   <button onClick={this.show_hide_timer}>{this.state.show_Timer ? "Unmount comp":"Mount Comp"}</button>

      //   {this.state.show_Timer && <Mount_comp/>}
      // </div>

      <div>
        {/* <Mount_comp/> */}
        <User_list/>
      </div>
    )
  }
}

export default App;