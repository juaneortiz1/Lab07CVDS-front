import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeesService'
import { useNavigate } from 'react-router-dom'


const ListEmployeeComponent = () => {

   const [employees, setEmployees] = useState([])

   const navigator = useNavigate();

    useEffect(() =>{
        getAllEmployees();
    },[])

    function getAllEmployees(){
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }
    
    function removeEmployee(id){
        console.log(id);
        
        deleteEmployee(id).then((response) =>{
            getAllEmployees();
        }).catch(error =>{
            console.error(error);
        })
    }

  return (
    <div className='container'>
        <h2 className='text-centered'>List of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Role</th>
                    <th>Employe Salary</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                    <tr key={employee.employeeId}>
                        <td>{employee.employeeId}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.role}</td>
                        <td>{employee.salary}</td>
                        <td>
                            <button className='btn btn-info' onClick={() => updateEmployee(employee.employeeId)}>Update</button>
                            <button className='btn btn-danger' onClick={() => removeEmployee(employee.employeeId)}
                                style = {{marginLeft : '10px'}}
                            >Delete</button>
                                
                        </td>
                    </tr>
                    )
                }
                <tr>

                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent