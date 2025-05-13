import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
let Navbar=()=>{

    let logged=localStorage.getItem('loggedUser')
    const handleLogout=()=>{
        localStorage.removeItem('loggedUser')
        window.location.href='/login'

    }


    const {user}=useContext(UserContext)
    return (
        <nav>
            <Link to="/">Home</Link> <span> | </span>
            <Link to="/dashboard">Dashboard</Link> <span> | </span>
            <Link to="/register">Register</Link> <span> | </span>
            <Link  to="/login">Login</Link> <span> | </span>
           
            {logged && ( <Link onClick={handleLogout} style={{color:'red'}} >Logout</Link> )}<span> | </span>
            {user && (<Link className="btn btn-success" to='/user-profile'><span>{user.role} : {user?.name}</span></Link>)}
            
        </nav>
    )
}

export default Navbar;