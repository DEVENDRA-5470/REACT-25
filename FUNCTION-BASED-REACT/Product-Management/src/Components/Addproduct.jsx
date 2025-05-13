import React, { useState } from "react";

const AddProduct =()=>{

    // state defining
    let [product,setProduct]=useState({
        id:"",
        name:"",
        price:"",
        description:"",
        category:"",
        image:"",
    })

    // generate product ID using timestamp
    let generateProdid=()=>{
        let timestamp=Date.now().toString().slice(-6)
        return `PROD${timestamp}`
    }

    // get current datetime.
    let getCurrenttime=()=>{
        return new Date().toLocaleString()
    }

    // handle input changes.
    let handleChange=(e)=>{
        let {name,value,files} = e.target;
        if (name==='image' && files.length>0){
            let reader= new FileReader();
            reader.onloadend=()=>{
                setProduct((prev)=>({...prev,image:reader.result}))
            }

            reader.readAsDataURL(files[0])
        }else{
            setProduct((prev)=>({...prev,[name]:value}))
        }
    }

    // handle submit 
    let handleSubmit=(e)=>{
        e.preventDefault()
        let id=generateProdid()
        let time_stamp=getCurrenttime()

        let newProduct={...product,id,time_stamp}

        // get the current product for storage
        let storedProducts=JSON.parse(localStorage.getItem('products')) || []

        // add the new product
        storedProducts.push(newProduct)

        // store the update array back in the localstorage
        localStorage.setItem('products',JSON.stringify(storedProducts))
        alert("Product Added Successfully ✅")
      

        setProduct({
            id:"",
            name:"",
            price:"",
            description:"",
            category:"",
            image:"",
        })
    }

    // component

    return (
        <div >
           {/* <center> <h3>Product</h3></center> */}
           <br />
             <div className="main">
            <div className="form-div">
              
                <form action="" onSubmit={handleSubmit}>
                    <div className="box">
                        <p><label htmlFor="">Product Image</label></p>
                        <input style={{border:"1px solid gray"}} type="file"  onChange={handleChange} name="image" />
                    </div>

                    <div className="box">
                        <p><label htmlFor="">Product Name</label></p>
                        <input type="text" onChange={handleChange} value={product.name} name="name" placeholder="Enter Product name." />
                    </div>

                    <div className="box">
                        <p><label htmlFor="">Product Price</label></p>
                        <input type="number" name="price" onChange={handleChange} value={product.price} placeholder="Enter Product Price." />
                    </div>

                    <div className="box">
                        <p><label htmlFor="">Product Description</label></p>
                        <textarea style={{resize:"none"}} cols={'36'} type="text" name="description" onChange={handleChange} value={product.description} placeholder="About product" />
                    </div>

                    
                    <div className="box">
                        <p><label htmlFor="">Product Category</label></p>
                        <input type="text" name="category" onChange={handleChange} value={product.category} placeholder="Product category" />
                    </div>

                    <div className="box">
                        <button className="btn btn-success mt-2" type="submit">Save</button>
                    </div>

                </form>
            </div>
            </div>
        </div>
    )


}

export default AddProduct;