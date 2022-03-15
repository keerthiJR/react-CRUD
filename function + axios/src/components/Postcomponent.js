import axios from 'axios';
import React, { useState } from 'react';

const Postcomponent = () => {

    const [data, myData] = useState()

    const handlechange = e => {
        let obj = { [e.target.name]: e.target.value }
        myData(prevData => ({
            ...prevData,
            ...obj
        }))
    }

    const handlesubmit = e => {
        axios.post('http://localhost:8000/Employees', data)
    }

    return (
        <div className='container'>
            {console.log(data)}
            <form onSubmit={handlesubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Employee Name</label>
                    <input type="text" name="Emp_Name" className="form-control" onChange={handlechange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Employee Designation</label>
                    <input type="text" name="Emp_Designation" className="form-control" onChange={handlechange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Employee salary</label>
                    <input type="text" name="Emp_Salary" className="form-control" onChange={handlechange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Employee Joining Date</label>
                    <input type="date" name="Emp_Joining_Date" className="form-control" onChange={handlechange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Employee Department</label>
                    <input type="text" name="Emp_Department"className="form-control" onChange={handlechange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Employee id</label>
                    <input type="text" name="Emp_id" className="form-control" onChange={handlechange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button className="btn btn-dark center" type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Postcomponent;