import React, { Component } from "react";
import Form from "./Form";
import Profile from "./Profile";


let profiles=[
 {name :"Dev",
             age:25,
             bio :"hai",
             hobbies:["Coding"],
             img : "/src/assets/images/student-1.avif"},
 {name :"Dev",
             age:25,
             bio :"hai",
             hobbies:["Coding"],
             img : "/src/assets/images/studet-1.avif"}
]

class App extends Component{
  render(){
   
    return <div className="d-flex m-3">
      {profiles.length > 0 ? (profiles.map((data,index)=><Profile details={data}/>)): <Profile details={null}/>}
      <profiles data={profiles}/>

    </div>
  }
}

export default App;