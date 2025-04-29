import React from "react";
import { Link } from "react-router-dom";
let Navbar=()=>{
    return (
        <nav>
            <Link to="/">Home</Link> <span> | </span>
            <Link to="/dashboard">Dashboard</Link> <span> | </span>
            <Link to="/register">Register</Link> <span> | </span>
            <Link to="/login">Login</Link> <span> | </span>
        </nav>
    )
}

export default Navbar;