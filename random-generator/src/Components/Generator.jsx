import React from "react";
import { Component } from "react";
import img1 from "/src/assets/images/img1.jpg"
import img2 from "/src/assets/images/img2.jpg"
import img3 from "/src/assets/images/img3.jpg"


class Random_generator extends Component{
    constructor(props){
        super(props)
        this.state={bgcolor:"#fffff",image:img1}

        this.img=[img1,img2,img3]
    }

    hello() {
        alert()
    }

    random_image = ()=>{
        let random_img=Math.floor(Math.random()*this.img.length);
        this.setState({image:this.img[random_img]})
        this.hello()

    }
    
    render(){
        let {image,bgcolor} = this.state
        
        return(
            <div>
                <div><img src={image} alt="" /></div>
                <button onClick={this.random_image}>Change Image</button>
            </div>
        )
    }

}

export default Random_generator