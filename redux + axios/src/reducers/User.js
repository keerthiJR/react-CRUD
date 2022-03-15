import {GET_USER} from '../actions/types'

export const GetUser = (state = {},{type,payload})=>{
    switch(type){
       case GET_USER:
            return {...state,userList: payload}
        default:
            return state
    }

}