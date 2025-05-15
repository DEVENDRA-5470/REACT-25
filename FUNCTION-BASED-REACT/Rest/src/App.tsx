import { useEffect } from "react";
import EmployeeList from "./Components/EmployeeList";

const App:React.FC=()=>{
  useEffect(()=>{
    let refresh=setInterval(()=>{
      window.location.reload()
    },2000)

    return ()=> clearInterval(refresh)
  })
  return (
    <div>
      <h1>Employee Management System</h1>
      <EmployeeList/>
    </div>
  )
}

export default App;