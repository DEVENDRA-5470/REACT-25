import axios from "axios";
import type { Employee } from "./type";

const apiUrl='http://192.168.1.101:9000/api/employees/'

// fetch all employees (GET)
export const fetchEmployees= async():Promise<Employee[]> =>{
    const response = await axios.get(apiUrl);
    console.log(response)
    return response.data
}

// create Employees
export const createEmployee= async (employee:Omit<Employee,'id'>):Promise<Employee>=>{
    const response=await axios.post(`${apiUrl}create/`,employee)
    console.log(response)
    return response.data;
}

// Delete Employees
export const deleteEmployee= async (id:number):Promise<void> =>{
    let check=await axios.delete(`${apiUrl}${id}/delete/`)
    console.log(check)
}