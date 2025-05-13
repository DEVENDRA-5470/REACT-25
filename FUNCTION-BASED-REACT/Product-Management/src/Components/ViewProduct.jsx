import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewProduct=()=>{
    const [product,setProduct]=useState(null);
    const navigate=useNavigate();


    useEffect(()=>{
        const data=localStorage.getItem("viewProduct")
        if (data){
            setProduct(JSON.parse(data))
        }else{
            navigate('/dashboard')
        }
    },[navigate])


    if(!product) return <h3>Loading...</h3>

    return (
        <div>
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p><img width={'100px'} src={product.image} alt="" /></p>
            <p>{product.price}</p>
        </div>
    )
}

export default ViewProduct;