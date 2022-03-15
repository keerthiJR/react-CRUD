import React from 'react'
import axios from 'axios'
class Patchcomponent extends React.Component {
  constructor(){
    super()
    this.state = {
     id: '',
     Emp_Name: '',
     Emp_Salary: ''
    }
  }
  myidlatest = event => {
    this.setState({id: event.target.value})
  }
  mynamelatest = event => {
    this.setState({Emp_Name: event.target.value})
    console.log(this.state.Emp_Name)
  }
  mysalarylatest =  event => {
    this.setState({Emp_Salary: event.target.value})
  }
  mySubmit = (e) => {
    axios.patch(`http://localhost:8000/Employees/${this.state.id}`,this.state)
    .then(res => {console.log(res)
      
    })
    .catch(err => {console.log(err)})
  }
  render(){
    { console.log(this.state)}
  return (
    <div className='container'>
      <h1 className='text-center'>Update fill sheet</h1>
      <form onSubmit={this.mySubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputID1" className="form-label">Student ID</label>
          <input type="text" onChange={this.myidlatest} className="form-control" id="exampleInputID1"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">Student Name</label>
          <input type="text" onChange={this.mynamelatest} className="form-control" id="exampleInputName1"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">Student salary</label>
          <input type="text"  onChange={this.mysalarylatest} className="form-control" id="exampleInputName1"></input>
        </div>
        <button className="btn btn-dark center"  type="submit">Submit</button>
      </form>
    </div>
  );
}
}
export default Patchcomponent;