import React, { useContext, useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { getAllProducts,deleteProduct } from "../Services/ProductServices";


let Dashboard= ()=>{
  const {user}=useContext(UserContext)
  const navigate=useNavigate()

  useEffect(()=>{
    const user=localStorage.getItem('loggedUser')
    if(!user){
      navigate('/login')
    }
  },[navigate])

 

  const is_super_user=user?.role === "Admin"

  // state for fetching product.
  let [products,setProducts]=useState([])

  // fetch product from stogage
  useEffect(()=>{
    const storedProducts=JSON.parse(localStorage.getItem('products')) || []
    setProducts(storedProducts)
  },[])

  // load product
  useEffect(()=>{
    let storedProducts=getAllProducts()
    setProducts(storedProducts)
  },[])

  const handleDelete=(id)=>{
    const currentdata=JSON.parse(localStorage.getItem("viewProduct"))
    if (currentdata && currentdata.id === id){
      localStorage.removeItem("viewProduct")
    }
    console.log("id :",id)
    deleteProduct(id)
    setProducts(getAllProducts()) // refresh ui

}

// view-handle
const handleView=(product)=>{
  console.log(product)
  localStorage.setItem('viewProduct',JSON.stringify(product))
  navigate("/view-product")
}

// update handle
const handleUpdate=(product)=>{
  localStorage.setItem("editProduct",JSON.stringify(product))
  navigate('/update-product')
}

if (products)

    return (
        <div>
          {is_super_user ?(
            <div>
              <button style={{width:"200px"}}  className="btn btn-success m-2">
                <Link  style={{textDecoration:'none',color:'white'}} to='/addproduct' >Add Product</Link>
              </button>
            </div>
       ):(
        <div>
        </div>
       )}
      
<table class="table table-hover">
  <thead >
    <tr >
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Category</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
      <th scope="col">Image</th>
      <th scope="col">Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
 
    {products.filter(product=>product !== null ).map((product)=>( <tr key={product.id}>
      <th scope="row">{product.id}</th>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>{product.description}</td>
      <td><img width={'50px'} src={product.image || null}  alt="not found" /></td>
      <td>{product.time_stamp}</td>
      <td>
       {is_super_user ?(
        <div>
           <button onClick={()=>handleDelete(product.id)} className="btn btn-primary m-1 w-50">DELETE</button>
        <br />
        <button onClick={()=>handleUpdate(product)} className="btn btn-danger m-1 w-50" >UPDATE</button>
        <br />
        <button onClick={()=>handleView(product)} className="btn btn-info m-1 w-50" >VIEW</button>
        </div>
       ):(
        <div>
        <button className="btn btn-info m-1 w-50" >VIEW</button>
        </div>
       )}
        </td>
    </tr>))}
   </tbody>
</table>
</div>)}

export default Dashboard;