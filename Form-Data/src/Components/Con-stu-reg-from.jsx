import React, { Component } from "react";

class Controlled_from extends Component{
    constructor(props){
        super(props)
        this.state={student:{name:"",age:"",mobile:""},student_data:null}
    }

    handle_change=(e)=>{
        let {name,value} = e.target;
        this.setState(prevState=>({student:{...prevState.student,[name]:value}}))
    }

    handle_submit = (e)=>{
        e.preventDefault()
        console.log("Student Data :",this.state.student)
        this.setState({student_data:this.state.student,student:{name:'',age:"",mobile:""}})
    }

    render(){
        let {name,age,mobile}=this.state.student
        let {student_data}=this.state

        return (
            <div>
                <form onSubmit={this.handle_submit}>
                    <label htmlFor="">Student Name</label>
                    <input type="text" value={name} name="name" onChange={this.handle_change} />
                    <br/>
                    <label htmlFor="">Student Age</label>
                    <input type="number" value={age} name="age" onChange={this.handle_change} />
                    <br />
                    <label htmlFor="">Student Mobile</label>
                    <input type="number" value={mobile} name="mobile" onChange={this.handle_change} />
                    <br />
                    <button type="submit">Register Now</button>
                </form>

                {student_data && (<div>{student_data.name}</div>)}
            </div>
        )
    }
}

export default Controlled_from;