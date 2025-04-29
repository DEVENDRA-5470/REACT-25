import React, { Component } from "react";
import Uncontrolled_form from "./Components/Un-stu-reg-form";
import Controlled_from from "./Components/Con-stu-reg-from";
class App extends Component{
  render(){
    return(
    <div>
        {/* <Uncontrolled_form /> */}
        <Controlled_from/>
    </div>

    )
  }
}

export default App;