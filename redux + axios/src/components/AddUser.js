import  React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Add} from '../actions'

export default function AddUser(){
    const navigate = useNavigate();
    const [data,setData] = useState({
        id: '',
        title:'',
    })

    const dispatch = useDispatch()
  
    const newdata = useSelector((state)=>state.AddReducer)
    console.log('useSelector',newdata)

    const handleSubmit = e =>{
    e.preventDefault()
    const target= e.target
    const name=target.name
    let obj={
        [name]: target.value
    }
    setData(prevState => ({
        ...prevState,
        ...obj
    }))
    
}

const mySubmit = e=>{
    e.preventDefault()    
    dispatch(Add(data))
    
}
    return(
        <div>
            <h1>Add a User</h1>
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