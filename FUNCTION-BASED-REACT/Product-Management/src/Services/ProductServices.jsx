
const STORAGE_KEY='products'

// all product
export const getAllProducts =()=>{
    return JSON.parse(localStorage.getItem(STORAGE_KEY))|| []
}

// delete
export const deleteProduct=(id)=>{
    let products=getAllProducts()
    let filtered=products.filter((p)=>(p.id !== id))
    console.log("FILETERD:",filtered)

    localStorage.setItem(STORAGE_KEY,JSON.stringify(filtered))
}

// update/edit
export const updateProduct=(id,Product)=>{
    const products=JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    
    const updated=products.map((prod)=>prod.id === id ? Product : prod)

localStorage.setItem(STORAGE_KEY,JSON.stringify(updated))
}
