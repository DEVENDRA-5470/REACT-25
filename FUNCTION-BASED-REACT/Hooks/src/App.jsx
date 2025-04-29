import React from "react";
// import My_counter from "./Components/Counter";
import NonLazyComp from "./Components/Non_lazy";
import LazyComp from "./Components/Lazy_comp";

const App =()=>{
  return (
    <div>
      {/* <My_counter name="IQ-INDIA"/> */}
      <NonLazyComp/>
      <LazyComp/>
    </div>
  )
}

export default App;