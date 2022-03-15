import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Delete} from '../actions'

export default function Deletecomponent(){
  const [value,setValue] = useState({
      id: ''
  })

   const dispatch = useDispatch()

  // console.log('selector',id)
   const handleSubmit = e =>{
    e.preventDefault()
    const target = e.target
    const name = target.name
    let obj={[name]: target.value}
    setValue(prevState=>(
        {
            ...prevState,
            ...obj
        }
    ))
}
    
    const mySubmit = e=>{
        e.preventDefault()
        if (window.confirm("Are you sure ?"))    
        dispatch(Delete(value))
    }

    return(
        <div>
            <h1>Delete Form</h1>
        <form className='container' onSubmit={mySubmit} >
            <div>
                <label>Id</label>
                <input name='id' onChange={handleSubmit}></input>
            </div>
        <button type='submit'>Submit</button>
       
            </form>
        </div>
    )
}