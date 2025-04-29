import React, { useState } from "react";

function NonLazyComp(){

    let [Username,setUsername]=useState(
        console.log("This is non lazy Component : Getting data from Localstorage .."),
        localStorage.getItem('username') || "Guest")

    let [inputValue,setInputvalue]=useState("")

    let update_username = ( ) =>{
        localStorage.getItem('username',inputValue)
        setUsername(inputValue)
    }

    return (
        <div>
            <h3>Welcome ,{Username}</h3>

            <input type="text" placeholder="Enter New Username" value={inputValue} 
            onChange={(e)=>setInputvalue(e.target.value)} />

            <button onClick={update_username}>Update Username</button>
        </div>
    )

}


export default NonLazyComp;