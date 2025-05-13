import axios from "axios";
import type { Employee } from "./type";

const apiUrl='http://127.0.0.1:8000/api/employees/'

// fetch all employees (GET)
export const fetchEmployees= async():Promise<Employee[]> =>{
    const response = await axios.get(apiUrl);
    return response.data
}

// create Employees
export const createEmployee= async (employee:Omit<Employee,'id'>):Promise<Employee>=>{
    const response=await axios.post(`${apiUrl}create/`,employee)
    console.log(response)
    return response.data;
}