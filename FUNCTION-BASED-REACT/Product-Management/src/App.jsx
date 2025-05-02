import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as BR, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AddProduct from "./Components/Addproduct";
const App =()=>{
   return (
    <BR>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/addproduct" element={<AddProduct/>} />
    </Routes>
    </BR>
   )

}

export default App;