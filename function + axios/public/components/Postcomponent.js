import axios from 'axios';
import React from 'react';
class Postcomponent extends React.Component {
    constructor() {
        super()
        this.state = {
            Emp_Name: '',
            Emp_Designation: '',
            Emp_Salary: '',
            Emp_Joining_Date: '',
            Emp_Department: '',
            Emp_id: ''
        }
    }

    empname = e=>{this.setState({Emp_Name:e.target.value})}
    empdesignation = e=>{this.setState({Emp_Designation:e.target.value})}
    empsalary = e=>{this.setState({Emp_Salary:e.target.value})}
    empjoindate = e=>{this.setState({Emp_Joining_Date:e.target.value})}
    empdept = e=>{this.setState({Emp_Department:e.target.value})}
    empid = e=>{this.setState({Emp_id:e.target.value})}

   

    render() {
        console.log(this.state)
        return (
            <div className='container'>
                <form onSubmit={()=>{
        axios.post('http://localhost:8000/Employees',this.state)
    }}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Employee Name</label>
                        <input type="text" className="form-control" onChange={this.empname} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Employee Designation</label>
                        <input type="text" className="form-control" onChange={this.empdesignation} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Employee salary</label>
                        <input type="text" className="form-control" onChange={this.empsalary} id="exampleInputEmail1" aria-describedby="emailHelp"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Employee Joining Date</label>
                        <input type="date" className="form-control" onChange={this.empjoindate} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Employee Department</label>
                        <input type="text" className="form-control" onChange={this.empdept} id="exampleInputEmail1" aria-describedby="emailHelp"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Employee id</label>
                        <input type="text" className="form-control" onChange={this.empid} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <button className="btn btn-dark center" type="submit">Submit</button>
                </form>
               
            </div>
        )
    }
}

export default Postcomponent;