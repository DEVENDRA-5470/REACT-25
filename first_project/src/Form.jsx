import React, { Component } from "react";


class Form extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="m-4 w-25 border border-1 p-4 rounded shadow-lg">
                <form action="">
                        <legend><h4>Student Registration Form</h4></legend>
                <div class="mb-3">
                    <label  class="form-label">Student Name</label>
                    <input type="text" class="form-control"  placeholder="Student Name"/>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Student Email</label>
                    <input type="email" class="form-control"  placeholder="Student Email"/>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Student Mobile</label>
                    <input type="number" class="form-control"  placeholder="Student Mobile"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Student Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div class="mb-3">
                    <input type="submit" class="form-control btn btn-success" value="Register Now" />
                </div>
            </form>
            </div>
        )
    }
}

export default Form;