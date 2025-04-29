import React, { Component } from "react";
import back_image from "./assets/images/missing.jpg";

class Profile extends Component {
    constructor() {
        super();
    }
    
    render() {

        let default_profle={
            name :"Not Available",
            age:"N/A",
            bio :"Nhi hai",
            hobbies:["None"],
            img : back_image
        }

        let { name, age, hobbies, bio, img } = this.props.details || default_profle;
        return (
            <div className="col-3 m-3">
                <div className="card">
                    <img src={img} onError={(e) => e.target.src = back_image} className="card-img-top" alt="Profile" />
                    <div className="card-body">
                        <h5 className="card-title">{name || "No"}</h5>
                        <h5 className="card-title">{age}</h5>
                        <p className="card-text">{bio}</p>
                        <span>Hobbies :</span>
                        <ul className="card-text">
                            {hobbies?.map((item, index) => (
                                <li style={{'list-style':'none'}} key={index}>{index + 1}. {item}</li> 
                            )) }
                        </ul>
                        <br />
                        <a href="#" className="btn btn-primary">{name}-{age}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
