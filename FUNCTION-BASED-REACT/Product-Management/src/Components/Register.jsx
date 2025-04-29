import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let Register= ()=>{

    let navigate=useNavigate()
    
    // Defining state
    let [formData,setFormData]=useState({role:"",name:"",mobile:"",email:"",password:""},
    )
    console.log("State:",formData)

    // handle change to track value
    let handleChange =(e)=>{
        let updatedFormData={
            ...formData,
            [e.target.name]:e.target.value,
            
        }
        console.log("Updated :",updatedFormData)
        setFormData(updatedFormData)
    }

    // hanle submit to send data to localstorage
    let handleSubmit=(e)=>{
        e.preventDefault();
        let Emp_id=formData.emp_id || Date.now().toString().slice(-5)
        console.log("Genereated Emp ID:",Emp_id)

        let updatedFormData={
            ...formData,
            emp_id:Emp_id,
        }

        localStorage.setItem(Emp_id,JSON.stringify(updatedFormData))
        alert("Your Login ID : "+Emp_id)

        setFormData(
            {
            role:"",name:"",mobile:"",password:"",email:"",

            }
        )
        console.log("Data Saved to Database.")
        navigate("/login")
    }


    // applying required
    useEffect(()=>{
        let inputs=document.querySelectorAll('input','select');
        inputs.forEach(input=>{
            input.required=true
        })
        console.log("REQUIRED APPLIIED")
    },[])


    return (
        <div >
           <center> <h1>This is Register Page</h1></center>
           <br />
             <div className="main">
            <div className="form-div">
                <p className="head">Register Now</p>
                <form action="" onSubmit={handleSubmit}>

                    <div className="box">
                        <p><label htmlFor="">Role</label></p>
                        <select name="role" value={formData.role} onChange={handleChange}>
                            
                            <option >Select Role</option>
                            <option value="staff">Staff</option>
                            <option value="Admin">Admin</option>
                            
                        </select>
                    </div>

                    <div className="box">
                        <p><label htmlFor="">Customer Name</label></p>
                        <input type="text"  onChange={handleChange} name="name" value={formData.name} placeholder="Enter Your name" />
                    </div>

                    <div className="box">
                        <p><label htmlFor="">Customer Mobile</label></p>
                        <input type="number" onChange={handleChange} value={formData.mobile} name="mobile" placeholder="Enter Your Mob no." />
                    </div>

                    <div className="box">
                        <p><label htmlFor="">Customer Email</label></p>
                        <input type="email" name="email" onChange={handleChange} value={formData.email} placeholder="Enter Your Email ID" />
                    </div>

                    <div className="box">
                        <p><label htmlFor="">Customer Password</label></p>
                        <input type="password" name="password" onChange={handleChange} value={formData.password} placeholder="Create Password" />
                    </div>

                    <div className="box">
                        <button type="submit">Register Now</button>
                    </div>

                </form>
            </div>
            </div>
        </div>
    )
}

export default Register;