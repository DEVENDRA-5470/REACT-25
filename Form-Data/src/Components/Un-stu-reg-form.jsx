import React from "react";
import { Component } from "react";
class Uncontrolled_form extends Component{
    constructor(props){
        super(props)
        this.stu_name_ref=React.createRef()
        this.stu_age_ref=React.createRef()
        this.stu_mob_ref=React.createRef()
        this.stu_roll_ref=React.createRef()
        
        this.state={student_data:null}

    }

    handle_submit = (e) =>{
        e.preventDefault()

       let student_data={
            name:this.stu_name_ref.current.value,
            age:this.stu_age_ref.current.value,
            mob:this.stu_mob_ref.current.value,
            roll:this.stu_roll_ref.current.value
        }

        this.setState({student_data})

    }
    

    render(){

        let {student_data} = this.state
        return (

            <div>
                 <form onSubmit={this.handle_submit}>
                <label htmlFor="">Student Name :</label>
                <input type="text" ref={this.stu_name_ref}  placeholder="Student Name" />
                <br />
                <label htmlFor="">Student Age :</label>
                <input type="number" ref={this.stu_age_ref}  placeholder="Student Age" />
                <br />
                <label htmlFor="">Student Mob :</label>
                <input type="number" ref={this.stu_mob_ref}  placeholder="Student Mob" />
                <br />
                <label htmlFor="">Student Roll no :</label>
                <input type="number" ref={this.stu_roll_ref}  placeholder="Student Roll no" />

                <br />
                <button type="submit">Register Now</button>
            </form>

            
            { student_data ? (<div>{student_data.name}</div> ):(<p>No students Data Founded..</p>)}
            
            </div>
           
            
        
        )
    }
}

export default Uncontrolled_form