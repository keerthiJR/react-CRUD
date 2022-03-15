import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Update} from '../actions'

export default function Updatecomponent(){
    const navigate = useNavigate();
    const [value,setValue] = useState({
        id:'',
        title: ''
    })

    const dispatch = useDispatch()

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
       dispatch(Update(value))
             
    }

    return(
        <div>
        <form className='container' onSubmit={mySubmit}>
            <div>
                <label>Id</label>
                <input name='id' onChange={handleSubmit}></input>
            </div>
            <div>
                <label>Title</label>
                <input name='title' onChange={handleSubmit}></input>
            </div>
        <button type='submit'>Submit</button>
        <button onClick={()=>navigate('/')}>Home page</button>
            </form>
        </div>
    )
}