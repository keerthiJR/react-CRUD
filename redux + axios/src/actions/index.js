import axios from "axios"
import {GET_USER,UPDATE_USER,ADD_USER,DELETE_USER}  from './types'

export function User(){
    
    const response = axios.get('http://localhost:4567/Users')
        .then((res)=>res.data)
       
        .catch(err=>console.log(err))

    return{
        type: GET_USER ,
        payload: response
    }
}


export function Add(data){
   const res =  axios.post('http://localhost:4567/Users',data)
   .then((r)=>r.data)  
    .catch(err=>console.log(err))

    return{
      type: ADD_USER  ,
      payload: data
    }
}

export function Update(value){
    axios.patch( `http://localhost:4567/Users/${value.id}`,value)
    .then((res)=>console.log(res))
    .catch(err=>console.log(err))

    console.log(value.id)
     return{
       type: UPDATE_USER  ,
       payload: value
     }
 }

export function Delete(value){
    axios.delete( `http://localhost:4567/Users/${value.id}`)
        .then((res)=>console.log(res))
        .catch(err=>console.log(err))
    
    console.log(value.id)
     return{
       type: DELETE_USER  ,
       payload: value
     }
 }
