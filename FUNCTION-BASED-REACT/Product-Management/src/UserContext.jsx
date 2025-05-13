import React from "react";
import { createContext,useState } from "react";

export const UserContext=createContext();

const UserProvider=({children})=>{
    const [user,setUser]=useState(
        JSON.parse(localStorage.getItem("loggedUser")) || null
    )

    return (
        <UserContext.Provider value ={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;



