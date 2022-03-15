import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Patchcomponent = () => {

  const [data,setData] = useState()

  const handlechange=e=>{
    let obj={[e.target.name]:e.target.value};
    setData(prevdata=>({
      ...prevdata,
      ...obj
    }))
  }

  const handlesubmit = event=>{
    axios.patch(`http://localhost:8000/Employees/${data.id}`,data)
  }

  return (
    <div className='container'>
       {console.log(data)}
      <h1 className='text-center'>Update fill sheet</h1>
      <form onSubmit={handlesubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputID1" className="form-label">Student ID</label>
          <input type="text" name="id" onChange={handlechange} className="form-control" id="exampleInputID1"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">Student Name</label>
          <input type="text" name="Emp_Name" onChange={handlechange} className="form-control" id="exampleInputName1"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">Student salary</label>
          <input type="text"  name="Emp_Salary" onChange={handlechange} className="form-control" id="exampleInputName1"></input>
        </div>
        <button className="btn btn-dark center"  type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Patchcomponent;