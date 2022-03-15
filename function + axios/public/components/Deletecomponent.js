import axios from "axios"
import React from "react"

class Deletecomponent extends React.Component{
    constructor(){
        super()
        this.state={
            id:''
        }
    }
    myidlatest=e=>{
        this.setState({id: e.target.value})
    }
    mysubmit=(e)=>{
        axios.delete(`http://localhost:8000/Employees/${this.state.id}`,this.state)
    }
    render(){
        { console.log(this.state)}
        return(
            <div className="container">
                <h1 className='text-center'>Remove student </h1>
                <form onSubmit={this.mysubmit}>
                    <div>
                        <label htmlFor="exampleInputID1" className="form-label">Student ID</label>
                        <input type="text" onChange={this.myidlatest} className="form-control" id="exampleInputID01"></input>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </div>    
                </form>    
            </div>
        )
    }
}

export default Deletecomponent