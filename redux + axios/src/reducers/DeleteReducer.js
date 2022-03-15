import {DELETE_USER} from '../actions/types'

export const DeleteReducer = (state={},{type,payload})=>{
    switch(type){
        case DELETE_USER:
            return {...state,obj: payload}
        default:
            return state
    }
}