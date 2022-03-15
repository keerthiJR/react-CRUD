import {UPDATE_USER} from '../actions/types'

export const UpdateUser = (state={},{type,payload}) =>{
    switch(type){
        case UPDATE_USER:
            return {...state,change: payload}
        default:
            return state
    }
}