import axios from "axios"
import React, { useState } from "react"

const  Deletecomponent = () => {

    const [id,setId] = useState()

    const handlechange=(e)=>{
        setId({[e.target.name]:e.target.value});
    }
    const mysubmit=e=>{
        axios.delete(`http://localhost:8000/Employees/${id.id}`,id)
    }

        return(
            <div className="container">
                 {console.log(id)}
                <h1 className='text-center'>Remove student </h1>
                <form onSubmit={mysubmit}>
                    <div>
                        <label htmlFor="exampleInputID1" className="form-label">Student ID</label>
                        <input type="text" name="id" onChange={handlechange} className="form-control" id="exampleInputID01"></input>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </div>    
                </form>    
            </div>
        )
    }

export default Deletecomponent