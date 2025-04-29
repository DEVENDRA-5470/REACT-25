import { data } from "autoprefixer";
import React, { Component } from "react";

class User_list extends Component{
    constructor(props){
        super(props)
        this.state={users:[],loading:true,error:null}
        
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            if (!response.ok) throw new Error ("Nework response was not ok..")

                // console.log(response.json())
                return response.json();
        })
        .then((data)=>this.setState({users:data,loading:false}))
        .catch((error)=>this.setState({error:error.message,loading:false}))
        console.log("Component Mount")
        // console.log(this.state.users)
    }
    componentWillUnmount(){
        localStorage.setItem("users_backup",JSON.stringify(this.state.users))
        console.log("This is unmount ok")
    }
    render(){
       let {users,loading,error}=this.state
       if (loading) return <h1>Loading Data...</h1>
       if (error) return <p>Error:{error}</p>

       return (
        <div>
            <h2>Users Data Profile</h2>
            {users.map((d)=>(
                <div style={styles.main}>
                   <span style={styles.my_span}>{d.id}---</span>
                    {d.name}
                    {d.phone}
                </div>
            ))}
        </div>
       )
    }

}

export default User_list;

let styles ={
    main :{
        textAlign:"center",
        color :"red"

    },
    my_span:{
        color:"blue"
    }
}