import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as BR, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AddProduct from "./Components/Addproduct";
import UserProvider from "./UserContext";
import ViewProduct from "./Components/ViewProduct";
import UpdateProduct  from "/src/Components/UpdateProduct";
import { UserProfile } from "./Components/UserProfile";
const App =()=>{
   return (
    <UserProvider>
     <BR>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/addproduct" element={<AddProduct/>} />
      <Route path="/view-product" element={<ViewProduct/>} />
      <Route path="/update-product" element={<UpdateProduct/>} />
      <Route path="/user-profile" element={<UserProfile/>} />

    </Routes>
    </BR>
    </UserProvider>
   )

}

export default App;