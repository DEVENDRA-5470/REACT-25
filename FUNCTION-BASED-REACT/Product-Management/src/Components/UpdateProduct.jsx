import { useState,useEffect } from "react"
import { updateProduct } from "../Services/ProductServices"
import { useNavigate } from "react-router-dom"


const UpdateProduct=()=>{
    const [product,setProduct]=useState(null)
    const navigate=useNavigate()

    // load product from editproduct
    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem('editProduct'))
        if (data) setProduct(data)
        else navigate('/dashboard')
    },[navigate])


    // handlechange 
    const handleChange=(e)=>{
        const {name,value,files}=e.target;
        if (name==='image' && files.length>0){
            const reader=new FileReader();
            reader.onloadend=()=>{
                setProduct((prev)=>({...prev,image:reader.result}))
            }
            reader.readAsDataURL(files[0])
        }else{
            setProduct((prev)=>({...prev,[name]:value}))
        }
    }

    // handle submit
    const handleSubmit=(e)=>{
        e.preventDefault()
        updateProduct(product.id,product)
        localStorage.removeItem('editProduct')
        navigate('/dashboard')
    }


    if (!product) return null
    
    return(
        <div>
           <form onSubmit={handleSubmit} action="">
                <div>
                    <label htmlFor="">Image</label>
                    <input type="file"
                     name="image"
                     onChange={handleChange}
                      />
                    <br />
                    {product.image && <img width={'100px'} src={product.image} alt="" /> }
                </div>

                <div>
                    <label htmlFor="">Name</label>
                    <input type="text"
                     name="name"
                     onChange={handleChange}
                     value={product.name}/>
                </div>

                <div>
                    <label htmlFor="">Price</label>
                    <input type="text"
                     name="price"
                     onChange={handleChange}
                     value={product.price}/>
                </div>

                <div>
                    <label htmlFor="">Description</label>
                    <input type="text"
                     name="description"
                     onChange={handleChange}
                     value={product.description}/>
                </div>

                <div>
                    <label htmlFor="">Categroy</label>
                    <input type="text"
                     name="category"
                     onChange={handleChange}
                     value={product.category}/>
                </div>

            <button type="submit">Save Changes</button>
           </form>
        </div>
    )
}


export default UpdateProduct;
