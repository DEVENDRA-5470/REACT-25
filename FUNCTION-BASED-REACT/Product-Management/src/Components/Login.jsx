import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

let Login= ()=>{
    const {setUser}=useContext(UserContext)
    let navigate=useNavigate()

    let [loginData,setLoginData]=useState({emp_id:"",password:""})
    
    let [error,setError]=useState("")

    // hanle input changes
    let handleChange=(e)=>{
        setLoginData({
            ...loginData,[e.target.name]:e.target.value
        })
    }

    // handle submit

    let handleSubmit=(e)=>{
        e.preventDefault()

        let {emp_id,password}=loginData
        let storeData=localStorage.getItem(emp_id);

        if (storeData){
            let userData=JSON.parse(storeData)
            localStorage.setItem("loggedUser",JSON.stringify(userData))
            if (userData.password===password){
                setUser(userData)
                // check role 
                navigate('/dashboard')
             
            }else{setError("Incorrect Password")}
        }else{setError("Incorrect Login ID")}
    }

    return (
        <div >
           <center> <h1>Login Page</h1></center>
           <br />
             <div className="main">
            <div className="form-div">
                <p className="head">Login Now</p>
                <form action="" onSubmit={handleSubmit}>

                  
                    <div className="box">
                        <p><label htmlFor="">Customer ID</label></p>
                        <input onChange={handleChange} type="text" value={loginData.emp_id}  name="emp_id" placeholder="Enter Cust ID" />
                    </div>
                 
                    <div className="box">
                        <p><label htmlFor="">Customer Password</label></p>
                        <input onChange={handleChange} type="password" value={loginData.password} name="password"  placeholder="Create Password" />
                    </div>

                    <div className="box">
                        <button className="btn btn-primary mt-2" type="submit">Login Now</button>
                    </div>

                   {error &&  <p style={{color:"red"}}>{error}</p>}

                </form>
            </div>
            </div>
        </div>
    )
}



export default Login;