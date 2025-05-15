import React, { useEffect, useState } from "react";
import { createEmployee, fetchEmployees,deleteEmployee } from "../apis";
import type { Employee } from "../type";

const EmployeeList : React.FC =()=>{
    const [employees,setEmployees]=useState<Employee[]>([])
    const [loading,setLoading]=useState<boolean>(true)
    const [error,setError]=useState<string|null>(null)
    const [newEmployee,setnewEmployee]=useState<Omit<Employee,'id'>>({
        E_ID:'',
        E_NAME:'',
        E_PROFILE:'',
        E_MOB:'',
        E_SALARY:0,
        E_EMAIL:'',
        E_EXP :0,
        E_GENDER:''
    })

    // Get data

    useEffect(()=>{
    const getEmployees = async ()=>{
        try{
            const employeesData=await fetchEmployees()
            setEmployees(employeesData)
        }
        catch (err){
            setError("Failed To Fetch Employees")
        }
        finally{
            setLoading(false)
        }
    }
    getEmployees()
},[])


// Create data
const handleCreate=async()=>{
    try{
        const created=await createEmployee(newEmployee);
        setEmployees((prev)=>[...prev,created])
        setnewEmployee({
            E_ID:'',
            E_NAME:'',
            E_PROFILE:'',
            E_MOB:'',
            E_SALARY:0,
            E_EMAIL:'',
            E_EXP :0,
            E_GENDER:''
        });
    }catch{
        setError("FAILED TO CREATE EMPLOYEE...")
    }
}


// Delete data
let handleDelete=async (id:number)=>{
    try{
        await deleteEmployee(id)
        setEmployees((prev)=>prev.filter((emp)=> emp.id !== id));
    }
    catch{
        setError("Failed to delete.")
    }
}



if (loading) return <div>Content is Loading Please wait..</div>
if (error) return <div>{error}</div>

return (
    <div>
        <h1>Create New Employee</h1>
        <input placeholder="E_ID" value={newEmployee.E_ID}
         onChange={(e)=>setnewEmployee({...newEmployee,E_ID:e.target.value})} />

        <input placeholder="E_NAME" value={newEmployee.E_NAME}
         onChange={(e)=>setnewEmployee({...newEmployee,E_NAME:e.target.value})} />

        <input placeholder="E_PROFILE" value={newEmployee.E_PROFILE}
         onChange={(e)=>setnewEmployee({...newEmployee,E_PROFILE:e.target.value})} />

        <input placeholder="E_MOB" value={newEmployee.E_MOB}
         onChange={(e)=>setnewEmployee({...newEmployee,E_MOB:e.target.value})} />

        <input placeholder="E_SALARY" value={newEmployee.E_SALARY}
         onChange={(e)=>setnewEmployee({...newEmployee,E_SALARY:+e.target.value})} />

        <input placeholder="E_EMAIL" value={newEmployee.E_EMAIL}
         onChange={(e)=>setnewEmployee({...newEmployee,E_EMAIL:e.target.value})} />

        <input placeholder="E_EXP" value={newEmployee.E_EXP}
         onChange={(e)=>setnewEmployee({...newEmployee,E_EXP:+e.target.value})} />

        <input placeholder="E_GENDER" value={newEmployee.E_GENDER}
         onChange={(e)=>setnewEmployee({...newEmployee,E_GENDER:e.target.value})} />

         <button onClick={handleCreate}>ADD EMPLOYEE</button>

        

        <h1>Employee List</h1>
        <ul style={{listStyle:"none"}}>
            {employees.map((emp)=>
                <li key={emp.id}>
                    <div>
                        <br />
                        <strong>{emp.E_NAME}</strong> | {emp.E_ID} | {emp.E_GENDER} | 
                        <button onClick={()=>handleDelete(emp.id)} >Delete {emp.E_NAME}</button>
                    </div>
                </li>
            )}
        </ul>
    </div>
)
}

export default EmployeeList;