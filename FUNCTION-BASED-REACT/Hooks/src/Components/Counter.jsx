import React, { useState } from "react";

const My_counter=({name})=>{
    const [count,set_count]=useState(0) // number,array,function,objects etc.
    const [set_name,update_name]=useState('Guest')

    const update_count =()=>set_count(count+1)
    const reset_count =()=>set_count(0)
    const new_name =()=>update_name('ORBEX')

    return (
        <div>
            
           <center><h1>{count>=3 ? name : "Hello"}</h1></center>
            <h2>My Counter : {count}</h2>
            <h2>My User : {set_name}</h2>

            <button onClick={update_count}>Update Counter</button>
            <button onClick={reset_count}>Reset Counter</button>
            <button onClick={new_name} >Set Name</button>
        </div>
    )
}

export default My_counter;