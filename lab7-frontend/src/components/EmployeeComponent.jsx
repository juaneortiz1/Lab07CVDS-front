import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeesService'
import { useNavigate, useParams } from 'react-router-dom'
const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [role, setRole] = useState('')
    const [salary, setSalary] = useState('')

    const {id} = useParams();

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        role: '',
        salary: '',
    })

    const navigator = useNavigate();    

    useEffect(() => {
        if(id){
            getEmployee(id).then((response )=>{
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setRole(response.data.role);
                setSalary(response.data.salary);
            }).catch(error => {
                console.error(error);
            })
        }

    }, [id])

    
    
    function saveOrUpdateEmployee(e){
        e.preventDefault();

        if(validateForm()){
            
            const employee = {firstName, lastName, role, salary}
            console.log(employee)

            if(id){
                updateEmployee(id, employee).then((response)=> {
                    console.log(response.data);
                    navigator('/employees');
                }).catch(error => {
                    console.error(error);
                })
            }else{
                createEmployee(employee).then((response) =>{
                    console.log(response.data);
                    navigator('/employees')
                })
            }
        }
    }

    function validateForm(){
        let valid = true;

        const errorCopy = {... errors}

        if(firstName.trim()){
            errorCopy.firstName = '';
        } else{
            errorCopy.firstName = 'First name is required'
            valid = false;            
        }
        if(lastName.trim()){
            errorCopy.lastName = '';
        }else{
            errorCopy.lastName = 'Last name is required'
            valid = false;    
        }
        if(role.trim()){
            errorCopy.role = '';
        }else{
            errorCopy.role = 'role is required'
            valid = false;    
        }
        if(salary.trim){
            errorCopy.salary = ''            
        }else{
            errorCopy.salary = 'salary is required'
            valid = false;    
        }

        setErrors(errorCopy);

        return valid

    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        } else{
            return <h2 className='text-center'>Add Employee</h2>
        }
        
    }

    return (
    <div className ='container'>
        <br /><br />
        <div className ='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        pageTitle()
                    }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name:</label>
                            <input
                                type='text'
                                placeholder='Enter Employee First Name'
                                name='firstName'
                                value={firstName}
                                className={`form-control ${ errors.firstName ? 'is-invalid':''}`}
                                onChange={(e) => setFirstName(e.target.value)}
                            >
                            </input>
                            {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name:</label>
                            <input
                                type='text'
                                placeholder='Enter Employee Last Name'
                                name='lastName'
                                value={lastName}
                                className={`form-control ${ errors.lastName ? 'is-invalid':''}`}
                                onChange={(e) => setLastName(e.target.value)}
                            >
                            </input>
                            {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Role:</label>
                            <input
                                type='text'
                                placeholder='Enter Employee Role'
                                name='Role'
                                value={role}
                                className={`form-control ${ errors.role ? 'is-invalid':''}`}
                                onChange={(e) => setRole(e.target.value)}
                            >
                            </input>
                            {errors.role && <div className='invalid-feedback'>{errors.role}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Salary:</label>
                            <input
                                type='number'
                                placeholder='Enter Employee Salary'
                                name='Salary'
                                value={salary}
                                className={`form-control ${ errors.salary ? 'is-invalid':''}`}
                                onChange={(e) => setSalary(e.target.value)}
                            >
                            </input>
                            {errors.salary && <div className='invalid-feedback'>{errors.salary}</div>}
                        </div>

                        <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                    </form>
                </div>
            </div> 

        </div>

    </div>
  )
}
export default EmployeeComponent