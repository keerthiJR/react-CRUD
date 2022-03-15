import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { User } from '../actions';

export default function Get(){
 
    const dispatch = useDispatch();
    
    const userdata= useSelector((state)=>state.GetUser.userList)
    console.log('state',userdata)


    useEffect(()=>{
        dispatch(User())
    },[])

    return (
    <div>
    
        <div>

            <h1>Redux Storage</h1>
         <table className="container table table-striped table-dark">
             <thead className='dark'>
                 <tr>
                 <td scope='col'>Id</td>
                 <td scope='col'>Title</td>
                 </tr>
             </thead>
             <tbody>
             {userdata && userdata.map((mypair)=>(
              <tr key={mypair.id}>
                  <td>{mypair.id}</td>
                  <td>{mypair.title}</td>
                  
                  </tr>
          ))}
             </tbody>
         </table>
        </div> 

        </div>
    )
}